import { ChangeEvent, useState } from "react"

type InputFieldType = {
  id: string
  label?: string
  placeholder: string
  type: string
}

const InputField = ({ id, label, placeholder, type = "text", ...props }: InputFieldType) => {
  const [value, setValue] = useState<string | number>()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
        {...props}
      />
    </div>
  )
}

export default InputField
