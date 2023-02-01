import { LineBreak } from "@/components/base"
import { NAVIGATES } from "@/constants"
import { useLogout } from "@/hooks"
import { OPEN_LOGIN_FORM, OPEN_REGISTER_FORM } from "@/store/actions"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"

type MenuType = {
  id?: number | string
  label?: string
  onClick: () => void
}

const AuthMenuItem = ({ label, onClick }: MenuType) => {
  return (
    <button
      className="block w-full cursor-pointer whitespace-nowrap py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

const AuthMenu = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [doLogout] = useLogout()
  const { isLogged } = useSelector((state: any) => state.auth)

  const AUTH_MENU = {
    NOT_LOGIN: [
      {
        id: 1,
        label: "Đăng nhập",
        onClick: () => dispatch(OPEN_LOGIN_FORM()),
      },
      {
        id: 2,
        label: "Đăng ký",
        onClick: () => dispatch(OPEN_REGISTER_FORM()),
      },
    ],
    ALREADY_LOGIN: [
      {
        id: 1,
        label: "Thông tin tài khoản",
        onClick: () => router.replace(NAVIGATES.USER_INFO),
      },
      {
        id: 2,
        label: "Lịch sử chuyến đi",
        onClick: () => router.replace(NAVIGATES.BOOKING_HISTORY),
      },
    ],
  }

  const OTHER_MENU = [
    {
      id: 1,
      label: "Cho thuê nhà",
      onClick: () => router.replace(NAVIGATES.HOME),
    },
    {
      id: 2,
      label: "Tổ chức trải nghiệm",
      onClick: () => router.replace(NAVIGATES.HOME),
    },
    {
      id: 3,
      label: "Hỗ trợ",
      onClick: () => router.replace(NAVIGATES.HOME),
    },
  ]

  const renderMenu = (menu: MenuType[]) => {
    return (menu || []).map((item) => {
      const { label, id, onClick } = item
      return <AuthMenuItem key={id} label={label} onClick={onClick} />
    })
  }

  const renderLogoutButton = () => {
    return (
      <AuthMenuItem
        label="Đăng xuất"
        onClick={() => {
          doLogout()
        }}
      />
    )
  }

  return (
    <div>
      <div>{renderMenu(AUTH_MENU[isLogged ? "ALREADY_LOGIN" : "NOT_LOGIN"])}</div>
      <LineBreak />
      <div>{renderMenu(OTHER_MENU)}</div>
      <LineBreak />
      <div>{isLogged && renderLogoutButton()}</div>
    </div>
  )
}

export default AuthMenu
