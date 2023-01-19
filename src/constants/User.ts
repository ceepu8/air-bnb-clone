import { AiFillEye, AiFillLock } from "react-icons/ai"
import { BsFillShieldLockFill } from "react-icons/bs"

export const USER_POLICY = [
  {
    id: 1,
    Icon: BsFillShieldLockFill,
    question: "Tại sao thông tin của tôi không được hiển thị ở đây?",
    answer: "Chúng tôi đang ẩn một số thông tin tài khoản để bảo vệ danh tính của bạn.",
  },
  {
    id: 2,
    Icon: AiFillLock,
    question: "Bạn có thể chỉnh sửa những thông tin nào?",
    answer:
      "Không thể thay đổi thông tin mà Airbnb sử dụng để xác minh danh tính của bạn. Bạn có thể chỉnh sửa thông tin liên hệ và một số thông tin cá nhân, nhưng chúng tôi có thể yêu cầu bạn xác minh danh tính vào lần tới khi bạn đặt phòng hoặc tạo mục cho thuê.",
  },
  {
    id: 3,
    Icon: AiFillEye,
    question: "Thông tin nào được chia sẻ với người khác?",
    answer:
      "Airbnb chỉ tiết lộ thông tin liên lạc cho Chủ nhà/Người tổ chức và khách sau khi đặt phòng/đặt chỗ được xác nhận.",
  },
]
