export const RoomDetailSkeleton = () => {
  return (
    <div className="w-[1120px]">
      <div className="h-[30px] w-4/6 animate-pulse rounded-sm bg-light-gray"></div>
      <div className="mt-2 h-[20px] w-52 animate-pulse rounded-sm bg-light-gray"></div>
      <div className="mt-2 grid grid-cols-4 space-x-2 overflow-hidden rounded-xl">
        <div className="col-span-2">
          <div className="h-[400px] w-full animate-pulse rounded-sm bg-light-gray"></div>
        </div>
        <div className="col-span-1">
          <div className="h-[196px] w-full animate-pulse rounded-sm bg-light-gray"></div>
          <div className="mt-2 h-[196px] w-full animate-pulse rounded-sm bg-light-gray"></div>
        </div>
        <div className="col-span-1">
          <div className="h-[196px] w-full animate-pulse rounded-sm bg-light-gray"></div>
          <div className="mt-2 h-[196px] w-full animate-pulse rounded-sm bg-light-gray"></div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3">
        <div className="col-span-2">
          <div className="h-[20px] w-1/3 animate-pulse rounded-sm bg-light-gray"></div>
          <div className="mt-2 h-[15px] w-1/6 animate-pulse rounded-sm bg-light-gray"></div>
        </div>
        <div className="col-span-1">
          <div className="h-[30px] w-1/3 animate-pulse rounded-sm bg-light-gray"></div>
          <div className="mt-4 h-[40px] w-full animate-pulse rounded-sm bg-light-gray"></div>
        </div>
      </div>
    </div>
  )
}
