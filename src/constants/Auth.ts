import { IconType } from "react-icons"
import { AiOutlineMail } from "react-icons/ai"
import { BsApple, BsFacebook } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"

type socialMediaType = {
  id: number
  Icon: IconType
  name: string
}

export const SOCIAL_MEDIA: socialMediaType[] = [
  {
    id: 1,
    Icon: BsFacebook,
    name: "Facebook",
  },
  {
    id: 2,
    Icon: FcGoogle,
    name: "Google",
  },
  {
    id: 3,
    Icon: BsApple,
    name: "Apple",
  },
  {
    id: 4,
    Icon: AiOutlineMail,
    name: "Email",
  },
]
