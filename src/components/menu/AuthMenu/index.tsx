import { LineBreak } from "@/components/base"
import { AUTH_MENU, OTHER_MENU } from "@/constants"
import { useLogout } from "@/hooks"
import { OPEN_LOGIN_FORM, OPEN_REGISTER_FORM } from "@/store/actions"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"

type AuthMenuItemType = {
  id?: number | string
  label?: string
  onClick: () => void
}

const AuthMenuItem = ({ label, onClick }: AuthMenuItemType) => {
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

  return (
    <div>
      <div>
        {isLogged &&
          AUTH_MENU.map((item) => {
            const { label, id, href } = item
            return <AuthMenuItem key={id} label={label} onClick={() => router.replace(href)} />
          })}
      </div>
      <div>
        {!isLogged && (
          <>
            <AuthMenuItem label="Đăng nhập" onClick={() => dispatch(OPEN_LOGIN_FORM())} />
            <AuthMenuItem label="Đăng ký" onClick={() => dispatch(OPEN_REGISTER_FORM())} />
          </>
        )}
      </div>
      <div className="my-2">
        <LineBreak />
      </div>
      <div>
        {OTHER_MENU.map((item) => {
          const { label, id, href } = item
          return <AuthMenuItem key={id} label={label} onClick={() => router.replace(href)} />
        })}
      </div>

      {isLogged && (
        <AuthMenuItem
          label="Đăng xuất"
          onClick={() => {
            doLogout()
          }}
        />
      )}
    </div>
  )
}

export default AuthMenu
