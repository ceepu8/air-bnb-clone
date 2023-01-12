import { LineBreak } from "@/components/base"
import { OPEN_LOGIN_FORM, OPEN_REGISTER_FORM } from "@/store/actions"
import Link from "next/link"
import { useDispatch } from "react-redux"
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
  const dispatch = useDispatch()

  return (
    <Dropdown isOpen={isOpen} className="right-0 min-w-[250px] !rounded-xl !py-2 !px-0">
      <div
        className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
        onClick={() => dispatch(OPEN_LOGIN_FORM())}
      >
        Đăng nhập
      </div>
      <div
        className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
        onClick={() => dispatch(OPEN_REGISTER_FORM())}
      >
        Đăng ký
      </div>
      <LineBreak />

      <NavLink path="/" destination="Cho thuê nhà" />
      <NavLink path="/" destination="Tổ chức trải nghiệm" />
      <NavLink path="/" destination="Hỗ trợ" />
    </Dropdown>
  )
}

export default AuthMenu
