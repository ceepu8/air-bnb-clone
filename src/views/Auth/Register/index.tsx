import { Button, InputField, LineBreak, Modal } from "@/components"
import { useRegister } from "@/hooks"
import { CLOSE_REGISTER_FORM, OPEN_LOGIN_FORM } from "@/store/actions"
import { registerSchema } from "@/validations"
import { yupResolver } from "@hookform/resolvers/yup"
import classNames from "classnames"
import dayjs from "dayjs"
import _ from "lodash"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import { ErrorMessage } from "../ErrorMessage"

export const RegisterViewModal = () => {
  const dispatch = useDispatch()
  const { isRegisterOpen } = useSelector((state: any) => state.authForm)
  const { doRegister, error, isSuccess } = useRegister()

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "all",
    resolver: yupResolver(registerSchema),
  })

  const onSubmit = (data: any) => {
    try {
      const values = {
        ...data,
        birthday: dayjs(dayjs(data.birthday).toDate()).format("DD/MM/YYYY"),
        gender: data.gender === "male" ? true : false,
        role: "USER",
      }
      const registerParams = _.pick(values, [
        "phone",
        "gender",
        "password",
        "birthday",
        "name",
        "email",
        "role",
      ])
      doRegister(registerParams)
    } catch (error) {}
  }

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        dispatch(CLOSE_REGISTER_FORM())
        dispatch(OPEN_LOGIN_FORM())
      }, 800)
    }
  }, [isSuccess])

  return (
    <Modal isOpen={isRegisterOpen} onClose={() => dispatch(CLOSE_REGISTER_FORM())} title="Đăng ký">
      <div className="mb-6">
        <LineBreak />
      </div>
      <div className="px-6 pb-8">
        {error && <p className="text-center text-danger">{error}</p>}
        {isSuccess && !error && <p className="text-center text-danger">Đăng ký thành công!</p>}
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
                "border-red-500": errors?.phone,
              }
            )}
          >
            <InputField
              register={register}
              value={watch("phone")}
              name="phone"
              id="phone"
              label="Số điện thoại"
            />
            {errors?.phone && <ErrorMessage message={errors?.phone?.message?.toString() || ""} />}
          </div>

          <div
            className={classNames(
              "relative border-[1px] border-y-[0.5px] border-solid border-dark-gray py-2 px-2",
              {
                "border-red-500": errors?.phone,
              }
            )}
          >
            <div className="relative">
              <label
                className={classNames(
                  "text-md absolute top-1/2 left-0 block -translate-y-1/2 text-dark-gray transition-all",
                  {
                    "!top-0 translate-y-0 text-xs": true,
                  }
                )}
                htmlFor="birthday"
              >
                Ngày sinh
              </label>
              <input
                {...register("birthday")}
                type="date"
                pattern="\d{4}-\d{2}-\d{2}"
                value={watch("birthday")}
                placeholder="DD/MM/YYYY"
                className="form-control w-full pt-4 font-light text-black-gray placeholder-dark-gray"
              />
              {errors?.birthday && (
                <ErrorMessage message={errors?.birthday?.message?.toString() || ""} />
              )}
            </div>
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
            <select defaultValue="male" {...register("gender")} name="gender" className="w-full">
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
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
              type="password"
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
              type="password"
            />
            {errors?.confirmPassword && (
              <ErrorMessage message={errors?.confirmPassword?.message?.toString() || ""} />
            )}
          </div>
          <div className="mt-4">
            <Button type="submit">Đăng ký</Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
