import * as Yup from "yup"
import { MESSAGE, REGEX, REQUIRED_FIELD } from "./base"

export const FORM_REGISTER = {
  NAME: "name",
  EMAIL: "email",
  PHONE: "phone",
  GENDER: "gender",
  BIRTHDAY: "birthday",
  PASSWORD: "password",
  CONFIRM_PASSWORD: "confirmPassword",
}

export const registerInitialValues = {
  [FORM_REGISTER.NAME]: "",
  [FORM_REGISTER.EMAIL]: "",
  [FORM_REGISTER.PHONE]: "",
  [FORM_REGISTER.GENDER]: "",
  [FORM_REGISTER.BIRTHDAY]: "",
  [FORM_REGISTER.PASSWORD]: "",
  [FORM_REGISTER.CONFIRM_PASSWORD]: "",
}

export const registerSchema = () =>
  Yup.object()
    .shape({
      [FORM_REGISTER.EMAIL]: REQUIRED_FIELD.trim()
        .matches(REGEX.EMAIL, "Email không hợp lệ")
        .matches(REGEX.VIETNAMESE, MESSAGE.VIETNAMESE),
      [FORM_REGISTER.NAME]: REQUIRED_FIELD,
      [FORM_REGISTER.PHONE]: REQUIRED_FIELD.matches(REGEX.PHONE, "Số điện thoại không hợp lệ"),
      [FORM_REGISTER.GENDER]: REQUIRED_FIELD,
      [FORM_REGISTER.BIRTHDAY]: REQUIRED_FIELD,
      [FORM_REGISTER.PASSWORD]: REQUIRED_FIELD,
      [FORM_REGISTER.CONFIRM_PASSWORD]: REQUIRED_FIELD.oneOf(
        [Yup.ref("password"), null],
        "Mật khẩu không đồng nhất"
      ),
    })
    .required()
