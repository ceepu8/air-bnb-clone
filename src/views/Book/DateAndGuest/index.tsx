import { Button, Calendar, Modal } from "@/components"
import dayjs from "dayjs"
import { useRouter } from "next/router"
import { useEffect, useMemo, useState } from "react"
import { DateRange } from "react-day-picker"
import { useFlag } from "@/hooks"

const convertedDate = (from: string | string[], to: string | string[]): DateRange => {
  const newDate = {
    from: dayjs(from.toString()).toDate(),
    to: dayjs(to.toString()).toDate(),
  }
  return newDate
}

export const DateAndGuest = () => {
  const { query } = useRouter()
  const { from = "", to = "", adult, children, toddler, numberNights } = query
  const date: DateRange = useMemo(() => convertedDate(from, to), [])
  const totalGuest = useMemo(() => Number(adult) + Number(children) + Number(toddler), [])

  const [currentDate, setDate] = useState<DateRange | undefined>(convertedDate(from, to))
  const handleChangeDate = (date: DateRange | undefined) => setDate(date)

  const [isOpen, setTrue, setFalse] = useFlag(false)

  useEffect(() => {
    setDate(date)
  }, [isOpen])

  return (
    <div>
      <div className="mt-6 flex justify-between">
        <div>
          <p className="font-medium text-black-gray">Ngày</p>
          <p className="mt-1 font-light text-black-gray">
            {dayjs(date.from).format("DD/MM/YYYY")} đến {dayjs(date.to).format("DD/MM/YYYY")}
          </p>
        </div>
        <Button className="cursor-pointer font-medium underline" text="black" onClick={setTrue}>
          Chỉnh sửa
        </Button>
      </div>
      <div className="mt-6 flex justify-between">
        <div>
          <p className="font-medium text-black-gray">Khách</p>
          <p className="mt-1 font-light text-black-gray">{totalGuest} khách</p>
        </div>
        <Button disabled className="font-medium underline" text="black">
          Chỉnh sửa
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        title="Calendar"
        headerClassName=""
        contentClassName=""
        isLoading={false}
        onClose={setFalse}
      >
        <div className="px-10">
          <Calendar
            date={currentDate}
            numberNights={Number(numberNights)}
            onSelect={handleChangeDate}
          />
        </div>
      </Modal>
    </div>
  )
}
