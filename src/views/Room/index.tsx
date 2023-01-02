import { useGetRoomList } from "@/hooks"
import { RoomInterface } from "@/interfaces"
import isEmpty from "lodash/isEmpty"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import LocationSlider from "./Location"
import { RoomItem } from "./RoomItem"
import RoomItemSkeleton from "./RoomItemSkeleton"

export const RoomView = () => {
  const { ref, inView } = useInView()
  const router = useRouter()
  const locationId = router.query?.locationId

  const [data, setData] = useState([])

  const {
    data: listRoom = [],
    isLoading,
    fetchMore,
    hasNextPage,
    isFetchingNextPage,
  } = useGetRoomList({ locationId })

  useEffect(() => {
    if (inView) {
      fetchMore()
    }
  }, [inView])

  useEffect(() => {
    if (!isLoading && !isFetchingNextPage) {
      setData((prev): any => [...prev, ...listRoom])
    }
  }, [listRoom, isFetchingNextPage])

  // xoas giup anh cai nay

  const renderList = () => {
    if (isLoading) {
      return [...Array(4)].map((_, idx) => <RoomItemSkeleton key={idx} />)
    }
    if (!isLoading && isEmpty(data)) {
      return <p className="col-span-4 flex items-center justify-center">Không có dữ liệu</p>
    }
    return (
      <>
        {data?.map((room: RoomInterface) => {
          return <RoomItem key={room.id} room={room} />
        })}
      </>
    )
  }

  return (
    <section className="mx-auto mt-8 max-w-[1315px] px-12">
      <LocationSlider />

      <h2 className="mb-4 text-2xl font-bold">Ở bất cứ đâu</h2>
      <div className="m-xs:grid-cols-1 m-md:grid-cols-2 m-lg:grid-cols-3 grid min-h-[450px] grid-cols-4 justify-start gap-x-4 gap-y-8">
        {renderList()}
      </div>
      {isFetchingNextPage && (
        <div className="m-xs:grid-cols-1 m-md:grid-cols-2 m-lg:grid-cols-3 mt-8 grid min-h-[450px] grid-cols-4 justify-start gap-x-4">
          {[...Array(4)].map((_, idx) => (
            <RoomItemSkeleton key={idx} />
          ))}
        </div>
      )}
      {hasNextPage && <div ref={ref} />}
    </section>
  )
}
