import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
import { BsFillSuitHeartFill } from "react-icons/bs"

import { NavLink } from "@/components"
import { RoomInterface } from "@/interfaces"
import { checkValidImage } from "@/utils"

type Props = {
  room: RoomInterface
}

const HeartIcon = () => {
  return (
    // TODO: handle click button
    <button>
      <BsFillSuitHeartFill
        stroke="white"
        strokeWidth={1}
        fill="rgba(0, 0, 0, 0.5)"
        className="absolute top-[15px] right-[15px] block overflow-visible text-2xl"
      />
    </button>
  )
}

export const RoomItem = (props: Props) => {
  const {
    id,
    hinhAnh,
    tenPhong,
    phongNgu,
    phongTam,
    giaTien,
    khach,
    rating = 4.5,
  } = props.room || {}

  return (
    <NavLink disabled={!id} href={`rooms/${id}`}>
      <div className="col-span-1">
        <div className="group relative flex flex-col">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={checkValidImage(hinhAnh || "")}
              alt="accommodation"
              width={300}
              height={300}
              layout={"responsive"}
              className="mr-2 !h-[300px] !w-[200%] !max-w-[200%] rounded object-cover transition-all duration-200 group-hover:scale-110"
            />
          </div>

          <HeartIcon />

          <div className="text-black-200 mt-4 flex flex-col">
            <h3 className="text-lg font-extrabold transition-all duration-200 group-hover:text-primary">
              {tenPhong}
            </h3>

            <div className="flex items-center justify-between">
              <span className="text-grey-500">
                Phòng ngủ: {phongNgu} - Phòng tắm: {phongTam}
              </span>
              <span className="flex items-center">
                <AiFillStar className="mr-1" />
                {rating}
              </span>
            </div>

            <span className="text-grey-500">Đón tối đa {khach} khách</span>

            <span className="font-semibold">${giaTien} đêm</span>
          </div>
        </div>
      </div>
    </NavLink>
  )
}
