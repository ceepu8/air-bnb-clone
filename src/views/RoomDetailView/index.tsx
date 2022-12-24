import MainLayout from "@/layouts/MainLayout"
import React from "react"
import { AIR_COVER, ROOM_SERVICES, STATIC_LOCATION, STATIC_ROOM_DETAIL } from "@/constants"
import Image from "next/image"
import { NavLink, LineBreak } from "@/components"
import classNames from "classnames"
import { Calendar } from "./Calendar"
import SelectionForm from "./SelectionForm"

export const RoomDetailView = () => {
  const { tenPhong, hinhAnh, khach, phongNgu, phongTam } = STATIC_ROOM_DETAIL
  const { tenViTri, tinhThanh, quocGia } = STATIC_LOCATION
  const { logoUrl, content } = AIR_COVER
  return (
    <MainLayout>
      <div className="mx-auto max-w-[1120px]">
        <div className="mt-6">
          <h3 className="text-3xl font-semibold">{tenPhong}</h3>
          <p className="text-grey-500 text-sm">
            {tenViTri}, {tinhThanh}, {quocGia}
          </p>
        </div>
        <div className="mt-6">
          <Image src={hinhAnh} className="rounded-md" width={1120} height={400} />
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2 mr-16">
            <div className="my-6">
              <p className="block text-xl font-semibold">Toàn bộ nhà - Số lượng phòng</p>
              <span className="text-sm">
                &#x2022; {khach} Khách &#x2022; {phongNgu} Phòng Ngủ &#x2022; {phongTam} Phòng Tắm
              </span>
            </div>
            <LineBreak />
            <div className="my-6">
              <img className="mb-4" alt="aircover logo" src={logoUrl} width={123} height={26} />
              <p className="mb-4 text-sm">{content}</p>
              <NavLink disabled href="#">
                <span className="block font-semibold underline">Tìm hiểu thêm</span>
              </NavLink>
            </div>
            <LineBreak />
            <div className="my-6">
              <p className="mb-4 text-xl font-medium">Nơi này có những gì cho bạn</p>
              <div className="flex flex-wrap gap-y-2">
                {ROOM_SERVICES.map((service) => {
                  const { keyName, icon: Icon } = service
                  return (
                    <div key={keyName} className="text-black-200 flex min-w-[50%] items-center">
                      <Icon className="mr-3 text-2xl" />
                      <span
                        className={classNames({
                          "line-through": !STATIC_ROOM_DETAIL[keyName],
                        })}
                      >
                        {service.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
            <LineBreak />
            <Calendar />
            <LineBreak />
          </div>
          <div className="col-span-1">
            <div className="relative h-full">
              <SelectionForm />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
