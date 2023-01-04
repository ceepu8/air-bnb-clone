import { Button } from "@/components"
import { useRouter } from "next/router"

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
    </div>
  )
}
