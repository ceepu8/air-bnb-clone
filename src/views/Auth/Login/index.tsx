import { Button, InputField, LineBreak, Modal } from "@/components"
import { CLOSE_LOGIN_FORM } from "@/store/actions"
import { useForm } from "react-hook-form"
import { AiOutlineMail } from "react-icons/ai"
import { BsApple, BsFacebook } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import { useDispatch, useSelector } from "react-redux"

const renderSocialMedia = () => {
  return (
    <div>
      <div className="mt-4 flex cursor-pointer items-center rounded-md border-[1px] border-solid border-black-gray py-3 px-5 hover:bg-very-light-gray">
        <BsFacebook className="h-5 w-5 fill-blue-500" />
        <p className="flex-1 text-center text-sm font-medium">Tiếp tục với Facebook</p>
      </div>

      <div className="mt-4 flex cursor-pointer items-center rounded-md border-[1px] border-solid border-black-gray py-3 px-5 hover:bg-very-light-gray">
        <FcGoogle className="h-5 w-5 fill-blue-500" />
        <p className="flex-1 text-center text-sm font-medium">Tiếp tục với Google</p>
      </div>

      <div className="mt-4 flex cursor-pointer items-center rounded-md border-[1px] border-solid border-black-gray py-3 px-5 hover:bg-very-light-gray">
        <BsApple className="h-5 w-5" />
        <p className="flex-1 text-center text-sm font-medium">Tiếp tục với Apple</p>
      </div>

      <div className="mt-4 flex cursor-pointer items-center rounded-md border-[1px] border-solid border-black-gray py-3 px-5 hover:bg-very-light-gray">
        <AiOutlineMail className="h-5 w-5" />
        <p className="flex-1 text-center text-sm font-medium">Tiếp tục với Email</p>
      </div>
    </div>
  )
}

export const LoginView = () => {
  const dispatch = useDispatch()
  const { isLoginOpen } = useSelector((state: any) => state.authForm)

  const { register, handleSubmit, watch } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Modal isOpen={isLoginOpen} onClose={() => dispatch(CLOSE_LOGIN_FORM())} title="Đăng nhập">
      <div className="mb-6">
        <LineBreak />
      </div>
      <div className="px-6 pb-8">
        <h1 className="text-xl font-medium">Chào mừng bạn đến với Airbnb</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="rounded-t-md border-[1px] border-solid border-dark-gray py-2 px-2">
            <InputField
              register={register}
              name="email"
              id="email"
              label="Email"
              value={watch("email")}
            />
          </div>
          <div className="rounded-b-md border-[1px] border-t-0 border-solid border-dark-gray py-2 px-2">
            <InputField
              register={register}
              name="password"
              id="password"
              label="Mật khẩu"
              value={watch("password")}
            />
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
