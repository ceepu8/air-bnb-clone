import { ChangeEvent, useState } from "react"

type InputFieldType = {
  label?: string
  placeholder: string
  type: string
  onChange: ChangeEvent<HTMLInputElement>
}

const InputField = ({ label, placeholder, type, onChange }: InputFieldType) => {
  const [value, setValue] = useState()
  const handleChange = (e: any) => {
    const { value } = e.target
    setValue(value)
  }

  return (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

export default InputField
