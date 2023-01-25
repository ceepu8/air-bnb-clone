import { PHONE_NUMBER_REGEX } from "@/constants"
import * as yup from "yup"

export const emailSchema = yup.object().shape({
  email: yup.string().email("Email không hợp lệ!").required("Không được bỏ trống"),
})

export const phoneNumberSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(PHONE_NUMBER_REGEX, "Số điện thoại không hợp lệ")
    .required("Không được để trống"),
})

export const requiredSchema = (name: string) => {
  const requiredSchema = yup.object().shape({
    [name]: yup.string().required("Không được bỏ trống"),
  })
  return requiredSchema
}

export const getSchema = (name: string) => {
  switch (name) {
    case "email":
      return emailSchema
    case "phone":
      return phoneNumberSchema
    default:
      break
  }
}
