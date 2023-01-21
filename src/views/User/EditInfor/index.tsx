import { Button } from "@/components"
import { ErrorMessage } from "@/views/Auth/ErrorMessage"
import { yupResolver } from "@hookform/resolvers/yup"
import classNames from "classnames"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { EditInforType } from "./type"

export const EditInfor = ({
  label = "",
  infor = "",
  notice = "",
  name = "",
  setEditing,
  disabled = false,
  onSubmit,
  children = () => <></>,
  schema,
}: EditInforType) => {
  const [value, setValue] = useState<boolean>(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: schema && yupResolver(schema),
    defaultValues: {
      [name]: infor,
    },
  })

  const doSubmit = (data: any) => {
    setValue(false)
    onSubmit(data)
  }

  return (
    <div
      className={classNames({
        "opacity-20": disabled,
      })}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-light">{label}</h3>
          <p className="text-sm font-light text-dark-gray">{!value ? infor : notice}</p>
        </div>
        <div>
          <Button
            size="small"
            variant="light"
            className="shadow-none"
            disabled={disabled}
            onClick={() => {
              setValue((prev) => !prev)
              setEditing((prev) => {
                if (!prev) {
                  return name
                } else {
                  return ""
                }
              })
            }}
          >
            {value ? "Huỷ" : "Chỉnh sửa"}
          </Button>
        </div>
      </div>
      <form onSubmit={handleSubmit(doSubmit)}>
        {value && (
          <>
            <div className="mt-4 rounded-md border-[1px] border-solid border-dark-gray py-1 px-2">
              <label className="text-xs font-light text-dark-gray"> {label}</label>
              {children(register)}
            </div>
            {errors?.[name] && <ErrorMessage message={errors?.[name]?.message?.toString() || ""} />}

            <div className="mt-4">
              <Button fullWidth={false} size="medium" variant="secondary" type="submit">
                Lưu
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  )
}
