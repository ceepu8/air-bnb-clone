import { LineBreak, NavLink } from "@/components/base"
import { USER_NAVIGATE } from "@/constants"
import { LOGOUT, OPEN_LOGIN_FORM, OPEN_REGISTER_FORM } from "@/store/actions"
import { useDispatch, useSelector } from "react-redux"
import Dropdown from "./Dropdown"

const AuthMenu = ({ isOpen, handleClose }: { isOpen: boolean; handleClose: () => void }) => {
  const dispatch = useDispatch()
  const { isLogged } = useSelector((state: any) => state.auth)

  const renderLoginAndRegisterMenu = () => {
    return (
      <>
        <div
          className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
          onClick={() => {
            dispatch(OPEN_LOGIN_FORM())
            handleClose()
          }}
        >
          Đăng nhập
        </div>
        <div
          className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
          onClick={() => {
            dispatch(OPEN_REGISTER_FORM())
            handleClose()
          }}
        >
          Đăng ký
        </div>
      </>
    )
  }

  const renderUserMenu = () => {
    return (
      <div>
        <NavLink href={USER_NAVIGATE.INFORMATION}>
          <p
            className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
            onClick={handleClose}
          >
            Thông tin tài khoản
          </p>
        </NavLink>
        <NavLink href={USER_NAVIGATE.BOOKING_HISTORY}>
          <p
            className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
            onClick={handleClose}
          >
            Lịch sử chuyến đi
          </p>
        </NavLink>
      </div>
    )
  }

  return (
    <Dropdown isOpen={isOpen} className="right-0 min-w-[250px] !rounded-xl !py-2 !px-0">
      {!isLogged && renderLoginAndRegisterMenu()}
      {isLogged && renderUserMenu()}
      <LineBreak />

      <NavLink href="/" disabled>
        <button
          className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
          onClick={handleClose}
        >
          Cho thuê nhà
        </button>
      </NavLink>
      <NavLink href="/" disabled>
        <button
          className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
          onClick={handleClose}
        >
          Tổ chức trải nghiệm
        </button>
      </NavLink>
      <NavLink href="/" disabled>
        <button
          className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
          onClick={handleClose}
        >
          Hỗ trợ
        </button>
      </NavLink>

      {isLogged && (
        <>
          <LineBreak />

          <div
            className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-semibold hover:bg-white-gray"
            onClick={() => {
              dispatch(LOGOUT.REQUEST())
              handleClose()
            }}
          >
            Đăng xuất
          </div>
        </>
      )}
    </Dropdown>
  )
}

export default AuthMenu
