import { Dropdown } from "@/components/base"
import { NAVIGATES } from "@/constants"
import { useLogout } from "@/hooks"
import { OPEN_LOGIN_FORM, OPEN_REGISTER_FORM } from "@/store/actions"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"

type AuthMenuItemType = {
  label: string
  className?: string
  onClick: () => void
}

const AuthMenuItem = ({ label, onClick }: AuthMenuItemType) => {
  return (
    <button
      className="block w-full cursor-pointer py-3 px-3 text-left text-sm font-light hover:bg-white-gray"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

const AuthMenu = ({ isOpen, handleClose }: { isOpen: boolean; handleClose: () => void }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [doLogout] = useLogout()
  const { isLogged } = useSelector((state: any) => state.auth)

  const renderAuthMenu = () => {
    const menus = isLogged
      ? [
          {
            label: "Thông tin tài khoản",
            onClick: () => {
              router.replace(NAVIGATES.USER_INFO)
              handleClose()
            },
          },
          {
            label: "Lịch sử chuyến đi",
            onClick: () => {
              router.replace(NAVIGATES.BOOKING_HISTORY)
              handleClose()
            },
          },
        ]
      : [
          {
            label: "Đăng nhập",
            onClick: () => {
              dispatch(OPEN_LOGIN_FORM())
              handleClose()
            },
          },
          {
            label: "Đăng ký",
            onClick: () => {
              dispatch(OPEN_REGISTER_FORM())
              handleClose()
            },
          },
        ]

    return menus.map((item: AuthMenuItemType) => (
      <AuthMenuItem key={item.label} label={item.label} onClick={item.onClick} />
    ))
  }

  const renderOtherMenu = () => {
    const menus = [
      {
        label: "Cho thuê nhà",
        onClick: () => {
          router.replace("/")
          handleClose()
        },
      },
      {
        label: "Tổ chức trải nghiệm",
        onClick: () => {
          router.replace("/")
          handleClose()
        },
      },
      {
        label: "Hỗ trợ",
        onClick: () => {
          router.replace("/")
          handleClose()
        },
      },
    ]

    return menus.map((item: AuthMenuItemType) => (
      <AuthMenuItem key={item.label} label={item.label} onClick={item.onClick} />
    ))
  }

  return (
    <Dropdown
      isOpen={isOpen}
      className="right-0 min-w-[250px] divide-y divide-very-light-gray !rounded-xl !py-2 !px-0"
    >
      <div>{renderAuthMenu()}</div>
      <div>{renderOtherMenu()}</div>
      {isLogged && (
        <div>
          <AuthMenuItem
            label="Đăng xuất"
            onClick={() => {
              doLogout()
              handleClose()
            }}
          />
        </div>
      )}
    </Dropdown>
  )
}

export default AuthMenu
