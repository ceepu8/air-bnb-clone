import { Button, Calendar, Modal } from "@/components"
import { FORMAT_DATE } from "@/constants"
import { useFlag } from "@/hooks"
import { getNumberNights } from "@/utils"
import dayjs from "dayjs"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { DateRange } from "react-day-picker"

const convertedDate = (
  from: string | string[] | undefined,
  to: string | string[] | undefined
): any => {
  const newDate = {
    from: from && dayjs(from.toString()).toDate(),
    to: to && dayjs(to.toString()).toDate(),
  }
  return newDate
}

const Date = () => {
  const router = useRouter()
  const [date, setDateQuery] = useState(router.query)
  const { from, to, numberNights } = date || {}

  const [isOpen, onOpen, onClose] = useFlag(false)

  const handleChangeDate = (_date: DateRange | undefined) => {
    const { from: _from, to: _to } = _date || {}
    const calcNights = getNumberNights(_from, _to)?.toString()

    setDateQuery((prev) => ({
      ...prev,
      from: _from && dayjs(_from).format(FORMAT_DATE.INTERNATIONAL),
      to: _to && dayjs(_to).format(FORMAT_DATE.INTERNATIONAL),
      numberNights: calcNights,
    }))
  }

  const handleUpdateDate = () => {
    if (from && to) {
      router.push({
        pathname: `/book/${router.query.id}`,
        query: date,
      })
      onClose()
    }
  }

  const handleRemoveDate = () => {
    if (from && to) {
      const resetDate = {
        ...date,
        from: dayjs().format(FORMAT_DATE.INTERNATIONAL),
        to: dayjs().add(1, "day").format(FORMAT_DATE.INTERNATIONAL),
      }
      setDateQuery(resetDate)

      router.push({
        pathname: `/book/${router.query.id}`,
        query: resetDate,
      })
    }
  }

  useEffect(() => {
    setDateQuery(router.query)
  }, [isOpen])

  return (
    <div className="mt-6 flex justify-between">
      <div>
        <p className="font-medium text-black-gray">Ngày</p>
        <p className="mt-1 font-light text-black-gray">
          {dayjs(router.query.from?.toString()).format(FORMAT_DATE.DEFAULT)} đến{" "}
          {dayjs(router.query.to?.toString()).format(FORMAT_DATE.DEFAULT)}
        </p>
      </div>
      <Button clean className="underline shadow-none" onClick={onOpen}>
        Chỉnh sửa
      </Button>
      <Modal isOpen={isOpen} title="Calendar" onClose={onClose}>
        <div className="mb-4">
          <div className="px-6">
            <Calendar
              date={convertedDate(from, to)}
              numberNights={Number(numberNights)}
              onSelect={handleChangeDate}
            />
          </div>
          <div className="flex justify-end gap-3 px-6 pb-4">
            <Button variant="light" size="small" fullWidth={false} onClick={handleRemoveDate}>
              Xoá ngày
            </Button>
            <Button
              variant="secondary"
              size="small"
              fullWidth={false}
              disabled={!from || !to}
              onClick={handleUpdateDate}
            >
              Lưu
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Date
