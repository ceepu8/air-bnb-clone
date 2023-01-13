import { Button, InputField, LineBreak, Modal } from "@/components"
import { PHONE_NUMBER_REGEX } from "@/constants"
import { CLOSE_REGISTER_FORM } from "@/store/actions"
import { yupResolver } from "@hookform/resolvers/yup"
import classNames from "classnames"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import * as yup from "yup"
import { ErrorMessage } from "../ErrorMessage"

const schema = yup
  .object()
  .shape({
    email: yup.string().email("Email không hợp lệ").required("Không được để trống"),
    name: yup.string().required("Không được để trống"),
    phoneNumber: yup
      .string()
      .matches(PHONE_NUMBER_REGEX, "Số điện thoại không hợp lệ")
      .required("Không được để trống"),
    gender: yup.string().required("Không được để trống"),
    password: yup.string().required("Không được để trống"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Mật khẩu không đồng nhất"),
  })
  .required()

export const RegisterView = () => {
  const dispatch = useDispatch()
  const { isRegisterOpen } = useSelector((state: any) => state.authForm)

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange" || "onTouched" || "onBlur",
    resolver: yupResolver(schema),
  })

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
              value={watch("email")}
              name="email"
              id="email"
              label="Email"
            />
            {errors?.email && <ErrorMessage message={errors?.email?.message?.toString() || ""} />}
          </div>
          <div
            className={classNames(
              "border-[1px] border-y-[0.5px] border-solid border-dark-gray py-2 px-2",
              {
                "border-red-500": errors?.name,
              }
            )}
          >
            <InputField
              register={register}
              value={watch("name")}
              name="name"
              id="name"
              label="Họ và tên"
            />
            {errors?.name && <ErrorMessage message={errors?.name?.message?.toString() || ""} />}
          </div>
          <div
            className={classNames(
              "border-[1px] border-y-[0.5px] border-solid border-dark-gray py-2 px-2",
              {
                "border-red-500": errors?.phoneNumber,
              }
            )}
          >
            <InputField
              register={register}
              value={watch("phoneNumber")}
              name="phoneNumber"
              id="phoneNumber"
              label="Số điện thoại"
            />
            {errors?.phoneNumber && (
              <ErrorMessage message={errors?.phoneNumber?.message?.toString() || ""} />
            )}
          </div>
          <div
            className={classNames(
              "border-[1px] border-y-[0.5px] border-solid border-dark-gray py-2 px-2",
              {
                "border-red-500": errors?.gender,
              }
            )}
          >
            <label className="text-xs text-dark-gray" htmlFor="">
              Giới tính
            </label>
            <select {...register("gender")} name="gender" className="w-full">
              <option value={1}>Nam</option>
              <option value={0}>Nữ</option>
            </select>
            {errors?.gender && <ErrorMessage message={errors?.gender?.message?.toString() || ""} />}
          </div>
          <div
            className={classNames(
              "border-[1px] border-y-[0.5px] border-solid border-dark-gray py-2 px-2",
              {
                "border-red-500": errors?.password,
              }
            )}
          >
            <InputField
              value={watch("password")}
              register={register}
              name="password"
              id="password"
              label="Mật khẩu"
            />
            {errors?.password && (
              <ErrorMessage message={errors?.password?.message?.toString() || ""} />
            )}
          </div>
          <div
            className={classNames(
              "rounded-b-md border-[1px] border-t-[0.5px] border-solid border-dark-gray py-2 px-2",
              {
                "border-red-500": errors?.confirmPassword,
              }
            )}
          >
            <InputField
              register={register}
              value={watch("confirmPassword")}
              name="confirmPassword"
              id="confirmPassword"
              label="Xác nhận mật khẩu"
            />
            {errors?.confirmPassword && (
              <ErrorMessage message={errors?.confirmPassword?.message?.toString() || ""} />
            )}
          </div>
          <div>
            <Button className="mt-4 w-full rounded-md py-3" variant="primary" btnType="submit">
              Đăng ký
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
