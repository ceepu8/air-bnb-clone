import * as Yup from "yup"
import { MESSAGE, REGEX, REQUIRED_FIELD } from "./base"

export const MIN_LEN_PASSWORD = 8

export const FORM_LOGIN = {
  EMAIL: "email",
  PASSWORD: "password",
}

export const loginInitialValues = {
  [FORM_LOGIN.EMAIL]: "",
  [FORM_LOGIN.PASSWORD]: "",
}

export const loginSchema = () =>
  Yup.object().shape({
    [FORM_LOGIN.EMAIL]: REQUIRED_FIELD.trim("Email không hợp lệ").matches(
      REGEX.EMAIL,
      "Email không hợp lệ"
    ),
    [FORM_LOGIN.PASSWORD]: REQUIRED_FIELD.trim("Mật khẩu không hợp lệ").matches(
      REGEX.VIETNAMESE,
      MESSAGE.VIETNAMESE
    ),
  })
