import { Button, InputField, LineBreak, Modal } from "@/components"
import { CLOSE_REGISTER_FORM } from "@/store/actions"
import { useDispatch, useSelector } from "react-redux"

export const RegisterView = () => {
  const dispatch = useDispatch()
  const { isRegisterOpen } = useSelector((state: any) => state.authForm)
  return (
    <Modal isOpen={isRegisterOpen} onClose={() => dispatch(CLOSE_REGISTER_FORM())} title="Đăng ký">
      <div className="mb-6">
        <LineBreak />
      </div>
      <div className="px-6 pb-8">
        <h1 className="text-xl font-medium">Chào mừng bạn đến với Airbnb</h1>
        <form className="mt-4">
          <div className="rounded-t-md border-[1px] border-solid border-dark-gray py-2 px-2">
            <InputField name="email" id="email" label="Email" />
          </div>
          <div className="border-[1px] border-t-0 border-solid border-dark-gray py-2 px-2">
            <InputField name="name" id="name" label="Họ và tên" />
          </div>
          <div className="border-[1px] border-t-0 border-solid border-dark-gray py-2 px-2">
            <InputField name="phoneNumber" id="phoneNumber" label="Số điện thoại" />
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
            <InputField name="password" id="password" label="Mật khẩu" />
          </div>
          <div className="rounded-b-md border-[1px] border-t-0 border-solid border-dark-gray py-2 px-2">
            <InputField name="confirmPassword" id="confirmPassword" label="Xác nhận mật khẩu" />
          </div>
          <div>
            <Button className="mt-4 w-full rounded-md py-3" variant="primary">
              Đăng nhập
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
