import { LineBreak } from "@/components"
import { EMAIL_INFOR_NOTICE, NAME_INFOR_NOTICE, PHONE_INFOR_NOTICE } from "@/constants"
import { useUpdateMe } from "@/hooks"
import { getSchema, requiredSchema } from "@/validations"
import { useState } from "react"
import { useSelector } from "react-redux"
import { EditInfor } from "../EditInfor"

export const UserInfor = () => {
  const { user = {} } = useSelector((state: any) => state.auth)
  const [editing, setEditing] = useState("")

  const { doUpdateMe } = useUpdateMe()

  const updateUserInformation = (data: any) => {
    let newData = false
    if (data["gender"]) {
      newData = data["gender"] === "Nam" ? true : false
    }
    doUpdateMe({ ...user, ...data, gender: newData }, {})
    setEditing("")
  }

  return (
    <div>
      <EditInfor
        name="name"
        label="Tên pháp lý"
        infor={user.name}
        setEditing={setEditing}
        notice={NAME_INFOR_NOTICE}
        disabled={editing !== "name" && editing !== ""}
        onSubmit={(data: any) => updateUserInformation(data)}
        children={(register: any) => <input {...register("name")} className="w-full font-light" />}
        schema={requiredSchema("name")}
      />

      <div className="my-6">
        <LineBreak className={editing === "" ? "" : "opacity-20"} />
      </div>

      <EditInfor
        name="email"
        label="Địa chỉ email"
        infor={user.email}
        setEditing={setEditing}
        notice={EMAIL_INFOR_NOTICE}
        disabled={editing !== "email" && editing !== ""}
        onSubmit={(data: any) => updateUserInformation(data)}
        children={(register: any) => <input {...register("email")} className="w-full font-light" />}
        schema={getSchema("email")}
      />

      <div className="my-6">
        <LineBreak className={editing === "" ? "" : "opacity-20"} />
      </div>

      <EditInfor
        name="phone"
        label="Số điện thoại"
        infor={user.phone}
        setEditing={setEditing}
        notice={PHONE_INFOR_NOTICE}
        disabled={editing !== "phone" && editing !== ""}
        onSubmit={(data: any) => updateUserInformation(data)}
        children={(register: any) => <input {...register("phone")} className="w-full font-light" />}
        schema={getSchema("phone")}
      />

      <div className="my-6">
        <LineBreak className={editing === "" ? "" : "opacity-20"} />
      </div>

      <EditInfor
        name="gender"
        label="Giới tính"
        infor={user.gender ? "Nam" : "Nữ"}
        setEditing={setEditing}
        disabled={editing !== "gender" && editing !== ""}
        onSubmit={(data: any) => updateUserInformation(data)}
        children={(register: any) => (
          <select {...register("gender")} className="w-full font-light">
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        )}
      />
    </div>
  )
}
