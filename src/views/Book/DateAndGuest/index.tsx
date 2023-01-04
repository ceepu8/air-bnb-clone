import { Button } from "@/components"
import { useRouter } from "next/router"
import React from "react"
import { AiOutlineClose } from "react-icons/ai"

export const DateAndGuest = () => {
  const router = useRouter()
  const { from, to, adult, children, toddler } = router.query

  const totalGuest = Number(adult) + Number(children) + Number(toddler)
  return (
    <div>
      <div className="mt-6 flex justify-between">
        <div>
          <p className="font-medium text-black-gray">Ngày</p>
          <p className="mt-1 font-light text-black-gray">
            {from} đến {to}
          </p>
        </div>
        <Button disabled className="font-medium underline" text="black">
          Chỉnh sửa
        </Button>
      </div>
      <div className="mt-6 flex justify-between">
        <div>
          <p className="font-medium text-black-gray">Khách</p>
          <p className="mt-1 font-light text-black-gray">{totalGuest} khách</p>
        </div>
        <Button disabled className="font-medium underline" text="black">
          Chỉnh sửa
        </Button>
      </div>

      <div className="fixed inset-0 z-[9999] h-screen bg-black bg-opacity-50">
        <div className="flex h-full items-center justify-center">
          <div className="relative h-[400px] w-[300px] rounded-lg bg-white p-8 shadow-lg">
            <button className="absolute top-4 right-4">
              <AiOutlineClose className="fill-black text-xl" />
            </button>
            <div>123</div>
          </div>
        </div>
      </div>
    </div>
  )
}
