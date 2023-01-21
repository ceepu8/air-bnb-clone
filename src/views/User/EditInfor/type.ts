import { Dispatch, ReactNode, SetStateAction } from "react"
import { UseFormRegister } from "react-hook-form"

export type EditInforType = {
  label?: string
  infor?: string
  notice?: string
  name?: string
  setEditing: Dispatch<SetStateAction<string>>
  disabled?: boolean
  onSubmit: (data: any) => void
  children?: (
    register: UseFormRegister<{
      [x: string]: string
    }>
  ) => ReactNode
  schema?: any
}
