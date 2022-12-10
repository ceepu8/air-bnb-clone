import Link from "next/link"
import Dropdown from "./Dropdown"

const LineBreak = () => {
  return <div className="my-4 h-[1px] w-full bg-gray"></div>
}

type NavProps = {
  path: string
  destination: string
}

const NavLink = ({ path, destination }: NavProps) => {
  return (
    <Link href={path}>
      <a className="block py-3 px-4 font-bold">{destination}</a>
    </Link>
  )
}

const AuthMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Dropdown isOpen={isOpen} className="right-0 min-w-[250px] p-5">
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
