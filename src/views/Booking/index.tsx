import { Button, LineBreak, NavLink } from "@/components"
import { BOOKING_ROOM } from "@/constants"
import { RoomInterface } from "@/interfaces"
import Image from "next/image"
import { useState } from "react"
import { AiFillStar } from "react-icons/ai"
import { BiMedal } from "react-icons/bi"
import { MdArrowBackIosNew } from "react-icons/md"

export const BookingView = () => {
  const [room, setRoom] = useState<RoomInterface>(BOOKING_ROOM)
  const renderNotice = () => {
    return (
      <div className="rounded-xl border-[1px] border-solid border-light-gray p-6">
        <div className="flex items-center justify-between">
          <div className="tracking-wide">
            <p className="font-semibold">Nơi này rất hiếm khi còn chỗ.</p>
            <p>Nhà/phòng cho thuê này thường kín phòng.</p>
          </div>
          <div>
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block h-8 w-8 fill-primary"
            >
              <g stroke="none">
                <path
                  d="m32.62 6 9.526 11.114-18.146 23.921-18.147-23.921 9.526-11.114z"
                  fill-opacity=".2"
                ></path>
                <path d="m34.4599349 2 12.8243129 14.9616983-23.2842478 30.6928721-23.28424779-30.6928721 12.82431289-14.9616983zm-17.9171827 16h-12.52799999l18.25899999 24.069zm27.441 0h-12.528l-5.73 24.069zm-14.583 0h-10.802l5.4012478 22.684zm-15.92-12.86-9.30799999 10.86h11.89399999zm19.253-1.141h-17.468l2.857 12.001h11.754zm1.784 1.141-2.586 10.86h11.894z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    )
  }

  const renderDateAndPeople = () => {
    return (
      <div>
        <div className="mt-6 flex justify-between">
          <div>
            <p className="font-medium text-black-gray">Ngày</p>
            <p className="mt-1 font-light text-black-gray">Ngày 10 - Ngày 17 tháng 1</p>
          </div>
          <Button disabled className="font-medium underline " text="black">
            Chỉnh sửa
          </Button>
        </div>
        <div className="mt-6 flex justify-between">
          <div>
            <p className="font-medium text-black-gray">Ngày</p>
            <p className="mt-1 font-light text-black-gray">Ngày 10 - Ngày 17 tháng 1</p>
          </div>
          <Button disabled className="font-medium underline" text="black">
            Chỉnh sửa
          </Button>
        </div>
      </div>
    )
  }

  const renderRoomInfo = () => {
    return (
      <div className="rounded-xl border-[1px] border-solid border-light-gray p-6">
        <div className="grid grid-cols-3">
          <div className="col-span-1 mr-3 overflow-hidden rounded">
            <Image
              src={room.hinhAnh || ""}
              width={800}
              height={680}
              alt="room"
              className="mr-2 !w-[200%] !max-w-[200%] rounded object-cover "
            />
          </div>
          <div className="col-span-2">
            <div className="flex h-[97%] flex-col justify-between">
              <div>
                <p className="text-xs font-light text-dark-gray">Toàn bộ căn phòng</p>
                <p className="text-sm font-light text-black-gray">{room.tenPhong}</p>
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
      </div>
    )
  }

  return (
    <section className="mx-auto mt-14 w-[1120px] max-w-[1120px]">
      <div className="flex items-center">
        <NavLink href="/">
          <MdArrowBackIosNew className="mr-10" />
        </NavLink>
        <p className="text-3xl font-medium">Yêu cầu đặt phòng/đặt chỗ &#x2022; Airbnb</p>
      </div>
      <div className="mt-8 grid grid-cols-2">
        <div className="col-span-1">
          <div className="mb-12">{renderNotice()}</div>
          <div>
            <p className="text-2xl font-medium">Chuyến đi của bạn</p>
            {renderDateAndPeople()}
          </div>
          <div className="mt-8">
            <LineBreak />
          </div>

          <div className="mt-8">
            <Button
              style={{ backgroundImage: "var(--linear-gradient-100)" }}
              className="rounded-lg bg-primary py-3 px-6 text-lg font-medium text-white"
            >
              Xác nhận và thanh toán &#x2022; Airbnb
            </Button>
          </div>
        </div>

        <div className="col-span-1 ml-24">
          <div className="relative h-full">
            <div className="sticky top-[80px]">{renderRoomInfo()}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
