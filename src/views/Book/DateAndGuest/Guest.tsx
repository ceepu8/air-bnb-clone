import { Button, LineBreak, Modal } from "@/components"
import { PEOPLE_SELECTION } from "@/constants"
import { useFlag } from "@/hooks"
import { Guest } from "@/interfaces"
import { useRouter } from "next/router"
import { useMemo, useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const Guest = () => {
  const router = useRouter()

  const { adult, children, toddler } = router.query

  const totalGuest = useMemo(
    () => Number(adult) + Number(children) + Number(toddler),
    [adult, children, toddler]
  )
  const [isOpen, onOpen, onClose] = useFlag(false)

  const [guest, setGuest] = useState<Guest>({
    adult: Number(adult) || 0,
    children: Number(children) || 0,
    toddler: Number(toddler) || 0,
  })

  const handleIncrease = (keyName: string) => {
    const selectedTotal = guest[keyName as keyof Guest]
    if (selectedTotal >= 0) {
      setGuest({
        ...guest,
        [keyName]: selectedTotal + 1,
      })
    }
  }

  const handleDecrease = (keyName: string) => {
    const selectedTotal = guest[keyName as keyof Guest]
    if ((selectedTotal >= 1 && keyName !== "adult") || selectedTotal > 1) {
      setGuest({
        ...guest,
        [keyName]: selectedTotal - 1,
      })
    }
  }

  const handleUpdateGuest = () => {
    router.replace({
      pathname: `/book/${router.query.id}`,
      query: {
        ...router.query,
        ...guest,
      },
    })
    onClose()
  }

  return (
    <div className="mt-6 flex justify-between">
      <div>
        <p className="font-medium text-black-gray">Khách</p>
        <p className="mt-1 font-light text-black-gray">{totalGuest} khách</p>
      </div>

      <Button clean className="underline shadow-none" onClick={onOpen}>
        Chỉnh sửa
      </Button>
      <Modal isOpen={isOpen} title="Guest" onClose={onClose} size="small">
        <div>
          <div className="px-6 pb-4">
            {PEOPLE_SELECTION.map((each) => {
              const { name, id, note, keyName } = each || {}
              const total = guest[keyName as keyof Guest] || 0
              const disabled = (keyName === "adult" && total === 1) || total === 0

              return (
                <div key={id} className="flex items-center justify-between">
                  <div className="mb-4">
                    <p className="mb-0 font-semibold">{name}</p>
                    <span className="text-sm font-light text-black-gray">{note}</span>
                  </div>
                  <div className="flex items-center">
                    <Button
                      isJustIcon
                      variant="light"
                      disabled={disabled}
                      onClick={() => handleDecrease(keyName)}
                    >
                      <AiOutlineMinus className="text-dark-gray" size={12} />
                    </Button>
                    <span className="mx-3 w-6 text-center font-light text-black-gray">{total}</span>
                    <Button isJustIcon variant="light" onClick={() => handleIncrease(keyName)}>
                      <AiOutlinePlus className="text-dark-gray" size={12} />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
          <LineBreak />
          <div className="mt-4 flex justify-between px-6 pb-4">
            <Button clean className="font-medium underline" onClick={onClose}>
              Huỷ
            </Button>
            <Button variant="secondary" className="w-max" onClick={handleUpdateGuest}>
              Lưu
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Guest
