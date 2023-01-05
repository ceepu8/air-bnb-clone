import { NotiIcon } from "@/components/icons"

export const Notice = () => {
  return (
    <div className="rounded-xl border-[1px] border-solid border-light-gray p-6">
      <div className="flex items-center justify-between">
        <div className="tracking-wide">
          <p className="font-semibold">Nơi này rất hiếm khi còn chỗ.</p>
          <p>Nhà/phòng cho thuê này thường kín phòng.</p>
        </div>
        <div>
          <NotiIcon />
        </div>
      </div>
    </div>
  )
}
