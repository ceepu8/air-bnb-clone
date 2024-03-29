import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import { Button, Dropdown } from "@/components"
import { CapsuleSelection } from "@/components/selections"
import { PEOPLE_SELECTION } from "@/constants"
import { useMouseLeave } from "@/hooks"
import { Guest } from "@/interfaces"
import { SET_LOCATION_GUEST } from "@/store/actions"
import { useDispatch, useSelector } from "react-redux"

const PeopleDropdown = ({ isOpen }: { isOpen: boolean }) => {
  const guest = useSelector((state: any) => state.locationForm.guest)
  const dispatch = useDispatch()

  const handleIncrease = (keyName: string) => {
    const selectedTotal = guest[keyName]
    if (selectedTotal >= 0) {
      dispatch(
        SET_LOCATION_GUEST({
          ...guest,
          [keyName]: selectedTotal + 1,
        })
      )
    }
  }

  const handleDecrease = (keyName: string) => {
    const selectedTotal = guest[keyName]
    if ((selectedTotal >= 1 && keyName !== "adult") || selectedTotal > 1) {
      dispatch(
        SET_LOCATION_GUEST({
          ...guest,
          [keyName]: selectedTotal - 1,
        })
      )
    }
  }
  return (
    <Dropdown isOpen={isOpen} className="top-[110%] right-0 min-w-[350px]">
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
    </Dropdown>
  )
}

const PeopleSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>()
  const guest = useSelector((state: any) => state.locationForm.guest)

  const total = Object.values<number>(guest).reduce((prev, curr): number => {
    return prev + curr
  }, 0)

  return (
    <div ref={ref}>
      <CapsuleSelection isActive={isMouseIn} labelText="Khách">
        <div className="leading-1 bg-transparent text-sm font-light text-dark-gray">{total}</div>
      </CapsuleSelection>
      <PeopleDropdown isOpen={isMouseIn} />
    </div>
  )
}

export default PeopleSelection
