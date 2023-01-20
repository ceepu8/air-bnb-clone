import { Button } from "@/components"
import { useUpdateMe } from "@/hooks"
import { ErrorMessage } from "@/views/Auth/ErrorMessage"
import { yupResolver } from "@hookform/resolvers/yup"
import classNames from "classnames"
import { isEmpty } from "lodash"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { EditInforType } from "./type"

export const EditInfor = ({
  label = "",
  infor = "",
  notice = "",
  name = "",
  options = [],
  setEditing,
  disabled = false,
}: // rules = [],
EditInforType) => {
  const schema = yup.object().shape({
    [name]: yup.string().required("Không được bỏ trống"),
  })
  const { doUpdateMe } = useUpdateMe()
  const [value, setValue] = useState<boolean>(false)
  const {
    register,
    formState: { errors },
    setValue: setFormValue,
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      [name]: infor,
    },
  })

  const updateUserInformation = (data: any) => {
    if (name === "gender") {
      doUpdateMe({ gender: data[name] === "Nữ" ? false : true }, {})
    } else {
      doUpdateMe(data, {})
    }
    setValue(false)
    setEditing("")
  }

  const renderSelect = () => {
    return (
      <select {...register(name)} className="w-full font-light">
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    )
  }

  const renderInput = () => {
    return <input {...register(name)} className="w-full font-light" />
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
              setFormValue(name, infor)
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
      <form onSubmit={handleSubmit(updateUserInformation)}>
        {value && (
          <>
            <div className="mt-4 rounded-md border-[1px] border-solid border-dark-gray py-1 px-2">
              <label className="text-xs font-light text-dark-gray"> {label}</label>
              {!isEmpty(options) ? renderSelect() : renderInput()}
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
