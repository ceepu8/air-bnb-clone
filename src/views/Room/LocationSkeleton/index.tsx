const LocationSkeleton = () => {
  return (
    <div className="my-5 flex max-w-[80px] animate-pulse flex-col items-center gap-y-1">
      <div className="h-[50px] w-[50px] rounded-full bg-light-gray"></div>
      <div className="mt-1 h-[15px] w-[70px] rounded bg-light-gray leading-none"></div>
      <div className="h-[15px] w-[60px] rounded bg-light-gray leading-none"></div>
    </div>
  )
}

export default LocationSkeleton
