import { LineBreak } from "@/components/base"
import { NAVIGATES } from "@/constants"
import { HEADER_AUTH_MENU } from "@/constants/Header"
import { LOGOUT, OPEN_LOGIN_FORM, OPEN_REGISTER_FORM } from "@/store/actions"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import Dropdown from "./Dropdown"

const AuthMenu = ({ isOpen, handleClose }: { isOpen: boolean; handleClose: () => void }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { isLogged } = useSelector((state: any) => state.auth)

  const renderLoginAndRegisterMenu = () => {
    return (
      <>
        <button
          className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
          onClick={() => {
            dispatch(OPEN_LOGIN_FORM())
            handleClose()
          }}
        >
          Đăng nhập
        </button>
        <button
          className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
          onClick={() => {
            dispatch(OPEN_REGISTER_FORM())
            handleClose()
          }}
        >
          Đăng ký
        </button>
      </>
    )
  }

  const renderUserMenu = () => {
    return (
      <div>
        <button
          className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
          onClick={() => {
            handleClose()
            router.replace(NAVIGATES.USER_INFO)
          }}
        >
          Thông tin tài khoản
        </button>
        <button
          className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
          onClick={() => {
            handleClose()
            router.replace(`${NAVIGATES.BOOKING_HISTORY}?pageSize=1`)
          }}
        >
          Lịch sử chuyến đi
        </button>
      </div>
    )
  }

  return (
    <Dropdown isOpen={isOpen} className="right-0 min-w-[250px] !rounded-xl !py-2 !px-0">
      {!isLogged && renderLoginAndRegisterMenu()}
      {isLogged && renderUserMenu()}
      <LineBreak />

      {HEADER_AUTH_MENU.map(({ slug, id, text }: { slug: string; id: number; text: string }) => {
        return (
          <button
            key={id}
            className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
            onClick={() => {
              handleClose()
              router.replace(slug)
            }}
          >
            {text}
          </button>
        )
      })}

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
