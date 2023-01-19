import { Bill, ButtonForMyLove } from "@/components"
import dayjs from "dayjs"
import { useRouter } from "next/router"
import { useState } from "react"
import { useSelector } from "react-redux"
import { DatePicker } from "./DatePicker"
import { PeoplePicker } from "./PeoplePicker"

const SelectionForm = ({ room }: any) => {
  const { roomForm } = useSelector((state: any) => state)
  const { date, numberNights } = roomForm
  const { giaTien } = room || {}
  const router = useRouter()

  const { id } = router.query

  const [isCheckRoom, setIsCheckRoom] = useState<boolean>(false)

  const doCloseCheckRoom = () => setIsCheckRoom(false)
  const doOpenCheckRoom = () => setIsCheckRoom(true)

  const handleBook = () => {
    const queryRoomForm = {
      from: dayjs(date?.from).format("YYYY-MM-DD"),
      to: dayjs(date?.to).format("YYYY-MM-DD"),
      adult: roomForm.guest.adult,
      children: roomForm.guest.children,
      toddler: roomForm.guest.toddler,
      productId: id,
      numberNights: roomForm.numberNights,
    }
    router.push({
      pathname: `/book/${id}`,
      query: queryRoomForm,
    })
  }

  return (
    <div className="relative h-full">
      <div className="sticky top-[85px] ml-2 pt-6 ">
        <div className="min-h-[200px] max-w-full rounded-xl border-[0.25px] border-light-gray p-6 shadow-modal">
          <p>Add dates for prices</p>
          <DatePicker {...{ isCheckRoom, doOpenCheckRoom, doCloseCheckRoom }} />
          <PeoplePicker />
          {date?.to && date?.from && (
            <>
              <ButtonForMyLove className="mt-4" onClick={handleBook}>
                Đặt phòng
              </ButtonForMyLove>
              <Bill price={giaTien} numberNights={numberNights} />
            </>
          )}
          {!date?.to && !date?.from && (
            <ButtonForMyLove className="mt-4" onClick={doOpenCheckRoom}>
              Kiểm tra tình trạng phòng
            </ButtonForMyLove>
          )}
        </div>
      </div>
    </div>
  )
}

export default SelectionForm
