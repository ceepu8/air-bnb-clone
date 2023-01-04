import { Button, Calendar, Modal } from "@/components"
import dayjs from "dayjs"
import { useRouter } from "next/router"
import { useState } from "react"
import { DateRange } from "react-day-picker"

export const DateAndGuest = () => {
  const { query } = useRouter()
  const { from = "", to = "", adult, children, toddler, numberNights } = query

  console.log(dayjs(to as string).toDate())

  const [isOpen, setIsOpen] = useState(false)
  const totalGuest = Number(adult) + Number(children) + Number(toddler)

  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)

  const date: DateRange = {
    from: dayjs(from?.toString()).toDate(),
    to: dayjs(to?.toString()).toDate(),
  }

  return (
    <div>
      <div className="mt-6 flex justify-between">
        <div>
          <p className="font-medium text-black-gray">Ngày</p>
          <p className="mt-1 font-light text-black-gray">
            {dayjs(date.from).format("DD/MM/YYYY")} đến {dayjs(date.to).format("DD/MM/YYYY")}
          </p>
        </div>
        <Button className="cursor-pointer font-medium underline" text="black" onClick={handleOpen}>
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
        onClose={handleClose}
      >
        <div className="px-8">
          <Calendar date={date} numberNights={Number(numberNights)} onSelect={() => {}} />
        </div>
      </Modal>
    </div>
  )
}
