import { Button, InputField, LineBreak, Modal, Social } from "@/components"
import { SOCIAL_MEDIA } from "@/constants"
import { useLogin } from "@/hooks"
import { CLOSE_LOGIN_FORM } from "@/store/actions"
import { loginSchema } from "@/validations"
import { yupResolver } from "@hookform/resolvers/yup"
import classNames from "classnames"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { ErrorMessage } from "../ErrorMessage"

const renderSocialMedia = () => {
  return (
    <div>
      {SOCIAL_MEDIA.map((each) => {
        return <Social {...each} />
      })}
    </div>
  )
}

export const LoginViewModal = () => {
  const dispatch = useDispatch()
  const { isLoginOpen } = useSelector((state: any) => state.authForm)
  const { doLogin, success, error, loading, setError } = useLogin()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    mode: "all",
    resolver: yupResolver(loginSchema()),
  })

  const onSubmit = (data: any) => {
    doLogin(data)
  }

  useEffect(() => {
    if (success && !loading) {
      dispatch(CLOSE_LOGIN_FORM())
      reset()
    }
  }, [success, loading])

  return (
    <Modal isOpen={isLoginOpen} onClose={() => dispatch(CLOSE_LOGIN_FORM())} title="Đăng nhập">
      <div className="mb-6">
        <LineBreak />
      </div>
      <div className="px-6 pb-8">
        {error && <p className="text-md pb-4 text-center text-danger">{error}</p>}
        <h1 className="text-xl font-medium">Chào mừng bạn đến với Airbnb</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4" onFocus={() => setError(null)}>
          <div
            className={classNames(
              "rounded-t-md border-[1px] border-b-[0.5px] border-solid border-dark-gray py-2 px-2",
              {
                "border-red-500": errors?.email,
              }
            )}
          >
            <InputField
              register={register}
              name="email"
              id="email"
              label="Email"
              value={watch("email")}
              error={errors?.email}
            />
            {errors?.email && <ErrorMessage message={errors?.email?.message?.toString() || ""} />}
          </div>

          <div
            className={classNames(
              "rounded-b-md border-[1px] border-t-[0.5px] border-solid border-dark-gray py-2 px-2",
              {
                "border-red-500": errors?.password,
              }
            )}
          >
            <InputField
              register={register}
              name="password"
              id="password"
              label="Mật khẩu"
              value={watch("password")}
              type="password"
              error={errors?.password}
            />
            {errors?.password && (
              <ErrorMessage message={errors?.password?.message?.toString() || ""} />
            )}
          </div>
          <Button type="submit" className="mt-5">
            Đăng nhập
          </Button>
        </form>

        <div className="mt-4 flex items-center">
          <LineBreak />
          <p className="mx-4 text-xs text-black-gray">hoặc</p>
          <LineBreak />
        </div>

        {renderSocialMedia()}
      </div>
    </Modal>
  )
}
