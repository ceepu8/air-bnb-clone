import { PHONE_NUMBER_REGEX } from "@/constants"
import * as yup from "yup"

export const registerSchema = yup
  .object()
  .shape({
    email: yup.string().email("Email không hợp lệ").required("Không được để trống"),
    name: yup.string().required("Không được để trống"),
    phone: yup
      .string()
      .matches(PHONE_NUMBER_REGEX, "Số điện thoại không hợp lệ")
      .required("Không được để trống"),
    gender: yup.string().required("Không được để trống"),
    birthday: yup.string().required("Không được để trống"),
    password: yup.string().required("Không được để trống"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Mật khẩu không đồng nhất"),
  })
  .required()
