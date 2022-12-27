const RoomItemSkeleton = () => {
  return (
    <div className="col-span-1 animate-pulse">
      <div className="relative flex flex-col">
        <div className="h-[300px] max-w-full rounded-2xl bg-light-gray"></div>
        <div className="mt-4 h-[20px] max-w-full rounded bg-light-gray"></div>
        <div className="flex justify-between">
          <div className="mt-2 h-[20px] w-[150px] rounded bg-light-gray"></div>
          <div className="mt-2 h-[20px] w-[50px] rounded bg-light-gray"></div>
        </div>
        <div className="mt-2 h-[20px] w-[100px] rounded bg-light-gray"></div>
        <div className="mt-2 h-[20px] w-[50px] rounded bg-light-gray"></div>
      </div>
    </div>
  )
}

export default RoomItemSkeleton
