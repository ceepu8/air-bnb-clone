import isEmpty from "lodash/isEmpty"

import { RoomItemSkeleton } from "@/components"
import { useGetRoomList } from "@/hooks"
import { RoomInterface } from "@/interfaces"
import LocationSlider from "./Location"
import { RoomItem } from "./RoomItem"

export const RoomView = () => {
  const { data: listRoom = [], isLoading } = useGetRoomList()

  const renderList = () => {
    if (isLoading) {
      return [...Array(4)].map((_, idx) => <RoomItemSkeleton key={idx} />)
    }

    if (!isLoading && isEmpty(listRoom)) {
      return <p className="col-span-4 flex items-center justify-center">Không có dữ liệu</p>
    }

    return (
      <>
        {listRoom?.map((room: RoomInterface) => {
          return <RoomItem key={room.id} room={room} />
        })}
      </>
    )
  }

  return (
    <section className="mx-auto mt-24 max-w-[1315px] px-12">
      <LocationSlider />

      <h2 className="mb-4 text-2xl font-bold">Ở bất cứ đâu</h2>
      <div className="m-xs:grid-cols-1 m-md:grid-cols-2 m-lg:grid-cols-3 grid min-h-[450px] grid-cols-4 justify-start gap-x-4 gap-y-8">
        {renderList()}
      </div>
    </section>
  )
}
