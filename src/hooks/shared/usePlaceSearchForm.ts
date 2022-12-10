import { SearchFormProps } from "@/interfaces"
import { SearchFormContext } from "@/store/contexts"
import { addDays } from "date-fns"
import { useContext, useState } from "react"

const usePlaceSearchForm = (code?: any) => {
  const context = useContext(SearchFormContext)

  const pastMonth = new Date()

  const [state, setState] = useState<SearchFormProps>({
    placeId: "",
    date: {
      from: pastMonth,
      to: addDays(pastMonth, 4),
    },
    people: {
      adult: 0,
      children: 0,
      toddler: 0,
    },
  })

  const handleSetState = (placeId: string) => {
    context?.setState?.((state: SearchFormProps) => {
      return {
        ...state,
        placeId,
      }
    })
  }

  const handleIncreasePeople = () => {
    context?.setState?.((state: SearchFormProps) => {
      return {
        ...state,
        people: {
          ...state.people,
          [code]: state.people[code as keyof typeof state.people] + 1,
        },
      }
    })
  }

  const handleDecreasePeople = () => {
    context?.setState?.((state) => {
      return {
        ...state,
        people: {
          ...state.people,
          [code]: state.people[code as keyof typeof state.people] - 1,
        },
      }
    })
  }

  return { state, setState, handleIncreasePeople, handleDecreasePeople, handleSetState }
}

export { usePlaceSearchForm }
