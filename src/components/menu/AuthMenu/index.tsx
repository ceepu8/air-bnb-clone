import { LineBreak } from "@/components/base"
import { LOGOUT, OPEN_LOGIN_FORM, OPEN_REGISTER_FORM } from "@/store/actions"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
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
  const { isLogged } = useSelector((state: any) => state.auth)

  const renderLoginAndRegisterMenu = () => {
    return (
      <>
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
      </>
    )
  }

  const renderUserMenu = () => {
    return (
      <div>
        <Link href="/account-setting/user-info">
          <p className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray">
            Thông tin tài khoản
          </p>
        </Link>
        <Link href="/account-setting/booking-history">
          <p className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray">
            Lịch sử chuyến đi
          </p>
        </Link>
      </div>
    )
  }

  return (
    <Dropdown isOpen={isOpen} className="right-0 min-w-[250px] !rounded-xl !py-2 !px-0">
      {!isLogged && renderLoginAndRegisterMenu()}
      {isLogged && renderUserMenu()}
      <LineBreak />

      <NavLink path="/" destination="Cho thuê nhà" />
      <NavLink path="/" destination="Tổ chức trải nghiệm" />
      <NavLink path="/" destination="Hỗ trợ" />

      {isLogged && (
        <>
          <LineBreak />

          <div
            className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-semibold hover:bg-white-gray"
            onClick={() => dispatch(LOGOUT.REQUEST())}
          >
            Đăng xuất
          </div>
        </>
      )}
    </Dropdown>
  )
}

export default AuthMenu
