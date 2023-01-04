import { Button, Calendar, Modal } from "@/components"
import { useFlag } from "@/hooks"
import dayjs from "dayjs"
import { useRouter } from "next/router"
import { useEffect, useMemo, useState } from "react"
import { DateRange } from "react-day-picker"

const convertedDate = (from: string | string[], to: string | string[]): DateRange => {
  const newDate = {
    from: dayjs(from.toString()).toDate(),
    to: dayjs(to.toString()).toDate(),
  }
  return newDate
}

const Date = () => {
  const { query } = useRouter()
  const { from = "", to = "", numberNights } = query
  const date: DateRange = useMemo(() => convertedDate(from, to), [])

  const [currentDate, setDate] = useState<DateRange | undefined>(convertedDate(from, to))
  const handleChangeDate = (date: DateRange | undefined) => setDate(date)
  const [isOpen, setTrue, setFalse] = useFlag(false)

  useEffect(() => {
    setDate(date)
  }, [isOpen])

  return (
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
      <Modal isOpen={isOpen} title="Calendar" onClose={setFalse}>
        <div className="mb-4">
          <div className="px-6">
            <Calendar
              date={currentDate}
              numberNights={Number(numberNights)}
              onSelect={handleChangeDate}
            />
          </div>
          <div className="flex justify-end px-6 pb-4 text-sm">
            <Button text="black" className="mr-4 underline">
              Xoá ngày
            </Button>
            <Button variant="black" className="rounded-lg py-2 px-5">
              Lưu
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Date
