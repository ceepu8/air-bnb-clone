import { SocialInterface } from "@/interfaces"
import { AiOutlineMail } from "react-icons/ai"
import { BsApple, BsFacebook } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"

export const SOCIAL_MEDIA: SocialInterface[] = [
  {
    id: 1,
    Icon: BsFacebook,
    name: "Facebook",
    href: "/",
    className: "fill-blue",
  },
  {
    id: 2,
    Icon: FcGoogle,
    name: "Google",
    href: "/",
  },
  {
    id: 3,
    Icon: BsApple,
    name: "Apple",
    href: "/",
  },
  {
    id: 4,
    Icon: AiOutlineMail,
    name: "Email",
    href: "/",
  },
]

export const PHONE_NUMBER_REGEX = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
