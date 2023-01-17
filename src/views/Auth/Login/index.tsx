import { Button, InputField, LineBreak, Modal } from "@/components"
import { SOCIAL_MEDIA } from "@/constants"
import { useLogin } from "@/hooks"
import { CLOSE_LOGIN_FORM } from "@/store/actions"
import { loginSchema } from "@/validations"
import { yupResolver } from "@hookform/resolvers/yup"
import classNames from "classnames"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { ErrorMessage } from "../ErrorMessage"

const renderSocialMedia = () => {
  return (
    <div>
      {SOCIAL_MEDIA.map((each) => {
        const { id, name, Icon } = each
        return (
          <div
            key={id}
            className="mt-4 flex cursor-pointer items-center rounded-md border-[1px] border-solid border-black-gray py-3 px-5 hover:bg-very-light-gray"
          >
            <Icon
              className={classNames("h-5 w-5", {
                "fill-blue-500": name === "Facebook",
              })}
            />
            <p className="flex-1 text-center text-sm font-medium">Tiếp tục với {name}</p>
          </div>
        )
      })}
    </div>
  )
}

export const LoginView = () => {
  const dispatch = useDispatch()
  const { isLoginOpen } = useSelector((state: any) => state.authForm)

  const { doLogin, success, error } = useLogin()

  console.log(error)

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange" || "onTouch" || "onTouched",
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = async (data: any) => {
    try {
      await doLogin(data)
      if (success) {
        dispatch(CLOSE_LOGIN_FORM())
      }
    } catch (error) {}
  }

  return (
    <Modal isOpen={isLoginOpen} onClose={() => dispatch(CLOSE_LOGIN_FORM())} title="Đăng nhập">
      <div className="mb-6">
        <LineBreak />
      </div>
      <div className="px-6 pb-8">
        <h1 className="text-xl font-medium">Chào mừng bạn đến với Airbnb</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
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
          <div>
            <Button className="mt-4 w-full rounded-md py-3" variant="primary" btnType="submit">
              Đăng nhập
            </Button>
          </div>
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
