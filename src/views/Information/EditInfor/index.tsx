import { Button } from "@/components"
import { useUpdateMe } from "@/hooks"
import classNames from "classnames"
import { isEmpty } from "lodash"
import { Dispatch, SetStateAction, useState } from "react"

type EditInforType = {
  label?: string
  infor?: string
  notice?: string
  name?: string
  options?: string[]
  setEditing: Dispatch<SetStateAction<string>>
  disabled?: boolean
}

export const EditInfor = ({
  label = "",
  infor = "",
  notice = "",
  name = "",
  options = [],
  setEditing,
  disabled = false,
}: EditInforType) => {
  const [value, setValue] = useState<boolean>(false)
  const [editInfor, setEditInfor] = useState<string>(infor)

  const { doUpdateMe } = useUpdateMe()

  const updateUserInformation = () => {
    if (name === "gender") {
      doUpdateMe({ [name]: editInfor === "Nữ" ? false : true }, {})
    } else {
      doUpdateMe({ [name]: editInfor }, {})
    }
    setValue(false)
    setEditing("")
  }

  const renderSelect = () => {
    return (
      <select
        className="w-full font-light"
        value={editInfor}
        onChange={(event) => {
          const { value } = event.target
          setEditInfor(value)
        }}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    )
  }

  const renderInput = () => {
    return (
      <input
        className="w-full font-light"
        value={editInfor}
        onChange={(event) => {
          const { value } = event.target
          setEditInfor(value)
        }}
      />
    )
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
              setEditInfor(infor)
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
      {value && (
        <div>
          <div className="mt-4 rounded-md border-[1px] border-solid border-dark-gray py-1 px-2">
            <label className="text-xs font-light text-dark-gray"> {label}</label>
            {!isEmpty(options) ? renderSelect() : renderInput()}
          </div>
          <div className="mt-4">
            <Button
              fullWidth={false}
              size="medium"
              variant="secondary"
              onClick={updateUserInformation}
            >
              Lưu
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
