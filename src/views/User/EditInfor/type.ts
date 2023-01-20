import { Dispatch, SetStateAction } from "react"

// export type Required = {
//   required: boolean
//   message?: string
// }

// export type EmailValidate = {
//   email: boolean
//   message?: string
// }

export type Pattern = {
  name: string
  message?: string
  regex?: RegExp
}

export type EditInforType = {
  label?: string
  infor?: string
  notice?: string
  name?: string
  options?: string[]
  setEditing: Dispatch<SetStateAction<string>>
  disabled?: boolean
  rules?: Pattern[]
}
