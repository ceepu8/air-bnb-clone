import { LineBreak } from "@/components/base"
import Link from "next/link"
import Dropdown from "./Dropdown"

type NavProps = {
  path: string
  destination: string
}

const NavLink = ({ path, destination }: NavProps) => {
  return (
    <Link href={path}>
      <a className="block py-3 px-3 text-sm font-light hover:bg-white-gray">{destination}</a>
    </Link>
  )
}

const AuthMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Dropdown isOpen={isOpen} className="right-0 min-w-[250px] !rounded-xl !py-2 !px-0">
      <NavLink path="/login" destination="Đăng nhập" />
      <NavLink path="/register" destination="Đăng ký" />
      <LineBreak />

      <NavLink path="/" destination="Cho thuê nhà" />
      <NavLink path="/" destination="Tổ chức trải nghiệm" />
      <NavLink path="/" destination="Hỗ trợ" />
    </Dropdown>
  )
}

export default AuthMenu
