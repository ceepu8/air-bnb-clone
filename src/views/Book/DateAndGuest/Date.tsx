import { Button, Calendar, Modal } from "@/components"
import { useFlag } from "@/hooks"
import classNames from "classnames"
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
  console.log(router.query)

  const [date, setDateQuery] = useState(router.query)
  const { from, to, numberNights } = date || {}

  const [isOpen, onOpen, onClose] = useFlag(false)

  const handleChangeDate = (_date: DateRange | undefined) => {
    const { from: _from, to: _to } = _date || {}
    console.log(_date)

    setDateQuery((prev) => ({
      ...prev,
      from: _from && dayjs(_from).format("YYYY-MM-DD"),
      to: _to && dayjs(_to).format("YYYY-MM-DD"),
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

  useEffect(() => {
    setDateQuery(router.query)
  }, [isOpen])

  return (
    <div className="mt-6 flex justify-between">
      <div>
        <p className="font-medium text-black-gray">Ngày</p>
        <p className="mt-1 font-light text-black-gray">
          {dayjs(router.query.from?.toString()).format("DD/MM/YYYY")} đến{" "}
          {dayjs(router.query.to?.toString()).format("DD/MM/YYYY")}
        </p>
      </div>
      <Button className="cursor-pointer font-medium underline" text="black" onClick={onOpen}>
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
          <div className="flex justify-end px-6 pb-4 text-sm">
            <Button text="black" className="mr-4 underline">
              Xoá ngày
            </Button>
            <Button
              variant="black"
              disabled={!from || !to}
              className={classNames("rounded-lg py-2 px-5", {
                "cursor-not-allowed opacity-50": !from || !to,
              })}
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
