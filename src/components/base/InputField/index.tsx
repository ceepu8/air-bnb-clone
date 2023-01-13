import classNames from "classnames"
import { useState } from "react"
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"

type InputFieldType = {
  id: string
  label?: string
  placeholder?: string
  type?: string
  name: string
  register?: any
  value?: any
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

export const InputField = ({
  id,
  label,
  placeholder,
  type = "text",
  name,
  register,
  value,
  error,
  ...props
}: InputFieldType) => {
  const [isFocus, setIsFocus] = useState(false)
  console.log()

  return (
    <div className="relative">
      {label && (
        <label
          className={classNames(
            "text-md absolute top-1/2 left-0 block -translate-y-1/2 text-dark-gray transition-all",
            {
              "!top-0 translate-y-0 text-xs": isFocus || value,
            }
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        {...register(name)}
        id={id}
        type={type}
        className="form-control w-full pt-4 font-light text-black-gray placeholder-dark-gray"
        placeholder={placeholder}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...props}
      />
    </div>
  )
}
