import { Bill, Button, LineBreak, NavLink } from "@/components"
import { AIR_COVER, BOOKING, FORMAT_DATE } from "@/constants"
import { useBookRoom, useGetRoomDetail } from "@/hooks"
import { OPEN_LOGIN_FORM } from "@/store/actions"
import dayjs from "dayjs"
import Image from "next/image"
import { useRouter } from "next/router"
import { AiFillStar } from "react-icons/ai"
import { BiMedal } from "react-icons/bi"
import { MdArrowBackIosNew } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { BookSuccessView } from "../BookSuccess"
import { DateAndGuest } from "./DateAndGuest"
import { Notice } from "./Notice"

export const BookingView = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { numberNights, productId, from, to, toddler, children, adult } = router.query
  const { user } = useSelector((state: any) => state.auth)
  const { data: room = {} } = useGetRoomDetail(productId)

  const { doBookRoom } = useBookRoom()

  const doPay = async () => {
    if (!user.id) {
      dispatch(OPEN_LOGIN_FORM())
      return
    }

    try {
      const data = {
        maPhong: productId,
        ngayDen: from && dayjs(from.toString()).format(FORMAT_DATE.DATE_ISO8601),
        ngayDi: to && dayjs(to.toString()).format(FORMAT_DATE.DATE_ISO8601),
        soLuongKhach: Number(toddler) + Number(children) + Number(adult),
        maNguoiDung: user.id,
      }
      doBookRoom(data, {})
    } catch (error) {}
  }

  const renderRoomInfo = () => {
    return (
      <div className="grid grid-cols-3">
        <div className="col-span-1 mr-3 overflow-hidden rounded">
          {room?.hinhAnh && (
            <Image
              src={room?.hinhAnh || ""}
              width={800}
              height={680}
              alt="room"
              className="mr-2 !w-[200%] !max-w-[200%] rounded object-cover "
            />
          )}
        </div>
        <div className="col-span-2">
          <div className="flex h-[97%] flex-col justify-between">
            <div>
              <p className="text-xs font-light text-dark-gray">Toàn bộ căn phòng</p>
              <p className="text-sm font-light text-black-gray">{room?.tenPhong}</p>
            </div>
            <div>
              <div className="flex items-center text-xs">
                <AiFillStar className="mr-1" /> <span>4 &#x2022; </span>
                <BiMedal className="mx-1" />
                <span className="font-light text-dark-gray">Chủ nhà siêu cấp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderAirCoverPolicy = () => {
    return (
      <div className="flex items-center">
        <p className="mr-1 font-light">{BOOKING.POLICY.AIRCOVER}</p>
        <Image src={AIR_COVER.logoUrl} alt="air-cover" width={65} height={15} />
      </div>
    )
  }

  return (
    <section className="mx-auto mt-14 w-full max-w-[1120px]">
      <div className="flex items-center">
        <NavLink href="/">
          <MdArrowBackIosNew className="mr-10" />
        </NavLink>
        <p className="text-3xl font-medium">{BOOKING.PROGRESS.TITLE}</p>
      </div>
      <div className="mt-8 grid grid-cols-2">
        <div className="col-span-1">
          <div className="mb-12">
            <Notice />
          </div>
          <div>
            <p className="text-2xl font-medium">Chuyến đi của bạn</p>
            <DateAndGuest />
          </div>
          <div className="mt-8">
            <LineBreak />
          </div>

          <div className="mt-8">
            <p className="text-xs font-light">{BOOKING.POLICY.PREBOOKING}</p>
          </div>

          <div className="mt-8">
            <Button className="" onClick={doPay}>
              Xác nhận và thanh toán &#x2022; Airbnb
            </Button>
          </div>
        </div>

        <div className="col-span-1 ml-24">
          <div className="relative h-full">
            <div className="sticky top-[80px] rounded-xl border-[1px] border-solid border-light-gray p-6">
              <div className="">{renderRoomInfo()}</div>
              <div className="mt-4">
                <LineBreak />
              </div>
              <div className="mt-4">{renderAirCoverPolicy()}</div>
              <div className="mt-4">
                <LineBreak />
              </div>
              <div className="mt-4">
                <p className="text-2xl font-medium">Chi tiết giá</p>
                <Bill price={room?.giaTien} numberNights={numberNights} isCharged={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookSuccessView />
    </section>
  )
}
