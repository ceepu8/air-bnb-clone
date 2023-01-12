import classNames from "classnames"
import { ChangeEvent, useState } from "react"

type InputFieldType = {
  id: string
  label?: string
  placeholder?: string
  type?: string
  name: string
}

export const InputField = ({
  id,
  label,
  placeholder,
  type = "text",
  name,
  ...props
}: InputFieldType) => {
  const [value, setValue] = useState<string | number>()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  const [isFocus, setIsFocus] = useState(false)

  return (
    <div className="relative">
      {label && (
        <label
          className={classNames(
            "text-md absolute top-1/2 left-0 block -translate-y-1/2 text-dark-gray transition-all ",
            {
              "!top-0 translate-y-0 text-xs": isFocus,
            }
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        className="form-control w-full pt-4 font-light text-black-gray placeholder-dark-gray"
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...props}
      />
    </div>
  )
}
