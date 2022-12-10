import { SearchFormContextState } from "@/interfaces"
import { createContext } from "react"

export const SearchFormContext = createContext<SearchFormContextState | null>(null)
