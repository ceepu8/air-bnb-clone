import MainLayout from "@/layouts/MainLayout"
import React from "react"
import { AIR_COVER, ROOM_SERVICES, STATIC_LOCATION } from "@/constants"
import Image from "next/image"
import { NavLink, LineBreak } from "@/components"
import classNames from "classnames"
import { Calendar } from "./Calendar"
import SelectionForm from "./SelectionForm"
import { useRouter } from "next/router"
import { useGetRoomDetail } from "@/hooks"
import { RoomDetailSkeleton } from "./RoomDetailSkeleton"
import { Comment } from "./Comment"

export const RoomDetailView = () => {
  const { tenViTri, tinhThanh, quocGia } = STATIC_LOCATION
  const { logoUrl, content } = AIR_COVER

  const router = useRouter()
  const { id } = router.query
  const { data: room = {}, isLoading } = useGetRoomDetail(id)

  const { tenPhong, hinhAnh, khach, phongNgu, phongTam } = room || {}

  const renderRoomName = () => {
    return (
      <>
        <h3 className="text-3xl font-semibold">{tenPhong}</h3>
        <p className="text-grey-500 text-sm">
          {tenViTri}, {tinhThanh}, {quocGia}
        </p>
      </>
    )
  }

  const renderRoomNumber = () => {
    return (
      <>
        <p className="block text-xl font-semibold">Toàn bộ nhà - Số lượng phòng</p>
        <span className="text-sm">
          &#x2022; {khach} Khách &#x2022; {phongNgu} Phòng Ngủ &#x2022; {phongTam} Phòng Tắm
        </span>
      </>
    )
  }

  const renderAirCover = () => {
    return (
      <>
        <img className="mb-4" alt="aircover logo" src={logoUrl} width={123} height={26} />
        <p className="mb-4 text-sm">{content}</p>
        <NavLink disabled href="#">
          <span className="block font-semibold underline">Tìm hiểu thêm</span>
        </NavLink>
      </>
    )
  }

  const renderServices = () => {
    return (
      <>
        <p className="mb-4 text-xl font-medium">Nơi này có những gì cho bạn</p>
        <div className="flex flex-wrap gap-y-2">
          {ROOM_SERVICES.map((service) => {
            const { keyName, icon: Icon, id } = service
            return (
              <div key={id} className="text-black-200 flex min-w-[50%] items-center">
                <Icon className="mr-3 text-2xl" />
                <span
                  className={classNames({
                    "line-through": !room[keyName],
                  })}
                >
                  {service.name}
                </span>
              </div>
            )
          })}
        </div>
      </>
    )
  }

  return (
    <MainLayout>
      <div className="mx-auto mt-6 max-w-[1120px]">
        {isLoading && <RoomDetailSkeleton />}
        {!isLoading && (
          <>
            <div>{renderRoomName()}</div>
            <div className="mt-6">
              {hinhAnh && <Image className="rounded-md" src={hinhAnh} width={1120} height={400} />}
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-2 mr-24">
                <div className="my-8">{renderRoomNumber()}</div>
                <LineBreak />
                <div className="my-8">{renderAirCover()}</div>
                <LineBreak />
                <div className="my-8">{renderServices()}</div>
                <LineBreak />
                <div className="mt-8">
                  <Calendar />
                </div>
              </div>
              <div className="col-span-1">
                <SelectionForm room={room} />
              </div>
            </div>
            <div className="mt-8">
              <LineBreak />
            </div>
            <div className="mt-8">
              <Comment />
            </div>
          </>
        )}
      </div>
    </MainLayout>
  )
}
