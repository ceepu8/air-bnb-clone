import * as Yup from "yup"

// Regex
export const REGEX = {
  EMAIL:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  VIETNAMESE:
    /^(?!.*[àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]).*$/,
  PHONE: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
}

// Length
export const MAX_LENGTH = {
  USERNAME: 30,
  FULLNAME: 12,
  INTRODUCTION: 500,
  PHONE: 11,
}

export const MIN_LENGTH = {
  PASSWORD: 8,
}

// Message
export const MESSAGE = {
  REQUIRED: "Không được bỏ trống",
  MIN_PASSWORD: `Mật khẩu cần tối thiểu ${MIN_LENGTH.PASSWORD} ký tự`,
  MAX_USERNAME: `Tên đăng nhập cần tối đa ${MAX_LENGTH.USERNAME} ký tự.`,
  MAX_PHONE: `Số điện thoại cần tối đa ${MAX_LENGTH.PHONE} ký tự`,
  VIETNAMESE: "Không được sử dụng tiếng Việt",
}

export const REQUIRED_FIELD = Yup.string().required(MESSAGE.REQUIRED)

// Error
export const ERROR = {
  EXISTED_EMAIL: "EMAIL_EXISTED",
  INVALID_USER: "INVALID_USER",
}
