import * as yup from "yup"

export const loginSchema = yup
  .object()
  .shape({
    email: yup.string().email("Email không hợp lệ").required("Không được để trống"),
    password: yup.string().required("Không được để trống"),
  })
  .required()
