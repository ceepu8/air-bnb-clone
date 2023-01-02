import { STATIC_COMMENT_LIST, STATIC_RATING_PROGRESS } from "@/constants"
import Image from "next/image"
import { AiFillStar } from "react-icons/ai"

const renderRating = () => {
  return (
    <>
      <div className="flex items-center text-xl font-medium">
        <span className="mr-2">
          <AiFillStar />
        </span>
        <span>4.86 &#x2022; 175 đánh giá</span>
      </div>

      <div className="mt-4 grid grid-cols-2">
        {STATIC_RATING_PROGRESS.map(({ name, id, rating }) => {
          const percentage = ((rating / 5) * 100).toFixed() + "%"

          return (
            <div key={id} className="col-span-1 mt-4 mr-24 flex items-center justify-between">
              <h1 className="font-light">{name}</h1>
              <div className="flex w-1/3 items-center">
                <div className="mr-3 h-1 w-full rounded bg-light-gray">
                  <div className="h-1 rounded bg-black" style={{ width: percentage }}></div>
                </div>
                <span className="text-xs font-medium">{rating}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

const renderCommentList = () => {
  return (
    <div className="grid grid-cols-2">
      {STATIC_COMMENT_LIST.map(({ tenNguoiBinhLuan, avatar, id, noiDung, ngayBinhLuan }) => {
        return (
          <div key={id} className="mt-8 mr-24">
            <div className="flex items-center">
              <Image className="rounded-full" src={avatar} alt="avatar" width="40" height="40" />
              <div className="ml-3">
                <p>{tenNguoiBinhLuan}</p>
                <p className="mt-1 text-xs text-dark-gray">{ngayBinhLuan}</p>
              </div>
            </div>
            <p className="mt-4">{noiDung}</p>
          </div>
        )
      })}
    </div>
  )
}

export const Comment = () => {
  return (
    <div>
      <div>{renderRating()}</div>
      <div className="mt-8">{renderCommentList()}</div>
    </div>
  )
}
