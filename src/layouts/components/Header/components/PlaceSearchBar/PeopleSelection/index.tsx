import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import { Button, DropDown } from "@/components"
import { useMouseLeave } from "@/hooks"
import { CapsuleSelection } from "@/components/selections"
import { PEOPLE_SELECTION } from "@/constants"
import classNames from "classnames"
import { useDispatch, useSelector } from "react-redux"
import { SET_LOCATION_GUEST } from "@/store/actions"

// type SelectionProps = {
//   type: string
//   subNote: string
//   code: string
// }

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
    <DropDown isOpen={isOpen} className="top-[110%] right-0 min-w-[350px]">
      {PEOPLE_SELECTION.map((each) => {
        const { name, id, note, keyName } = each
        return (
          <div key={id} className="flex items-center justify-between">
            <div className="mb-4">
              <p className="mb-0 font-semibold">{name}</p>
              <span className="text-sm">{note}</span>
            </div>
            <div className="flex items-center">
              <Button
                shape="circle"
                border="default"
                borderColor="grey"
                onClick={() => handleDecrease(keyName)}
                className={classNames("text-dark-gray", {
                  "cursor-not-allowed border-light-gray text-light-gray":
                    guest[keyName] === 0 || (keyName === "adult" && guest[keyName] === 1),
                })}
              >
                <AiOutlineMinus className={classNames("text-dark-gray", {})} size={12} />
              </Button>
              <span className="mx-3 w-6 text-center">{guest[keyName]}</span>
              <Button
                shape="circle"
                border="default"
                borderColor="grey"
                onClick={() => handleIncrease(keyName)}
              >
                <AiOutlinePlus className="text-dark-gray" size={12} />
              </Button>
            </div>
          </div>
        )
      })}
    </DropDown>
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
