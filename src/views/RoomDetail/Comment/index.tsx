import { AiFillStar } from "react-icons/ai"

const renderRating = () => {
  return (
    <div>
      <div className="flex items-center text-xl font-medium">
        <span className="mr-2">
          <AiFillStar />
        </span>
        <span>4.86 &#x2022; 175 đánh giá</span>
      </div>

      <div className="mt-4 grid grid-cols-2">
        <div className="col-span-1 mr-24">
          <div>
            <div className="mt-4 flex items-center justify-between">
              <h1 className="font-light">Mức độ sạch sẽ</h1>
              <div className="flex w-1/3 items-center">
                <div className="mr-3 h-1 w-full rounded bg-light-gray">
                  <div className="h-1 w-[92%] rounded bg-black"></div>
                </div>
                <span className="text-xs font-medium">4.9</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <h1 className="font-light">Giao tiếp</h1>
              <div className="flex w-1/3 items-center">
                <div className="mr-3 h-1 w-full rounded bg-light-gray">
                  <div className="h-1 w-[79%] rounded bg-black"></div>
                </div>
                <span className="text-xs font-medium">4.9</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <h1 className="font-light">Nhận phòng</h1>
              <div className="flex w-1/3 items-center">
                <div className="mr-3 h-1 w-full rounded bg-light-gray">
                  <div className="h-1 w-[85%] rounded bg-black"></div>
                </div>
                <span className="text-xs font-medium">4.9</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 mr-24">
          <div>
            <div className="mt-4 flex items-center justify-between">
              <h1 className="font-light">Mức độ sạch sẽ</h1>
              <div className="flex w-1/3 items-center">
                <div className="mr-3 h-1 w-full rounded bg-light-gray">
                  <div className="h-1 w-[92%] rounded bg-black"></div>
                </div>
                <span className="text-xs font-medium">4.9</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <h1 className="font-light">Giao tiếp</h1>
              <div className="flex w-1/3 items-center">
                <div className="mr-3 h-1 w-full rounded bg-light-gray">
                  <div className="h-1 w-[79%] rounded bg-black"></div>
                </div>
                <span className="text-xs font-medium">4.9</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <h1 className="font-light">Nhận phòng</h1>
              <div className="flex w-1/3 items-center">
                <div className="mr-3 h-1 w-full rounded bg-light-gray">
                  <div className="h-1 w-[85%] rounded bg-black"></div>
                </div>
                <span className="text-xs font-medium">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Comment = () => {
  return (
    <div>
      <div>{renderRating()}</div>
    </div>
  )
}
