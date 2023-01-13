import { Button, InputField, LineBreak, Modal } from "@/components"
import { CLOSE_REGISTER_FORM } from "@/store/actions"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

export const RegisterView = () => {
  const dispatch = useDispatch()
  const { isRegisterOpen } = useSelector((state: any) => state.authForm)

  const { register, handleSubmit, watch } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Modal isOpen={isRegisterOpen} onClose={() => dispatch(CLOSE_REGISTER_FORM())} title="Đăng ký">
      <div className="mb-6">
        <LineBreak />
      </div>
      <div className="px-6 pb-8">
        <h1 className="text-xl font-medium">Chào mừng bạn đến với Airbnb</h1>
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-t-md border-[1px] border-solid border-dark-gray py-2 px-2">
            <InputField
              register={register}
              value={watch("email")}
              name="email"
              id="email"
              label="Email"
            />
          </div>
          <div className="border-[1px] border-t-0 border-solid border-dark-gray py-2 px-2">
            <InputField
              register={register}
              value={watch("name")}
              name="name"
              id="name"
              label="Họ và tên"
            />
          </div>
          <div className="border-[1px] border-t-0 border-solid border-dark-gray py-2 px-2">
            <InputField
              register={register}
              value={watch("phoneNumber")}
              name="phoneNumber"
              id="phoneNumber"
              label="Số điện thoại"
            />
          </div>
          <div className="border-[1px] border-t-0 border-solid border-dark-gray px-2 pb-2">
            <label className="text-xs text-dark-gray" htmlFor="">
              Giới tính
            </label>
            <select name="gender" className="w-full">
              <option value="1">Nam</option>
              <option value="2">Nữ</option>
            </select>
          </div>
          <div className="border-[1px] border-t-0 border-solid border-dark-gray py-2 px-2">
            <InputField
              value={watch("password")}
              register={register}
              name="password"
              id="password"
              label="Mật khẩu"
            />
          </div>
          <div className="rounded-b-md border-[1px] border-t-0 border-solid border-dark-gray py-2 px-2">
            <InputField
              register={register}
              value={watch("confirmPassword")}
              name="confirmPassword"
              id="confirmPassword"
              label="Xác nhận mật khẩu"
            />
          </div>
          <div>
            <Button className="mt-4 w-full rounded-md py-3" variant="primary">
              Đăng ký
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
