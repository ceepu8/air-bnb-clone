import { Dispatch, SetStateAction } from "react"
import { DateRange } from "react-day-picker"

export interface PeopleInterface {
  adult: number
  children: number
  toddler: number
}

export type SearchFormProps = {
  placeId: string
  date: DateRange
  people: PeopleInterface
}

export type SearchFormContextState = {
  state: SearchFormProps
  setState: Dispatch<SetStateAction<SearchFormProps>>
}
