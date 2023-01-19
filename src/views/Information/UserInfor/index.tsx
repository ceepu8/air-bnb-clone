import { LineBreak } from "@/components"
import { EMAIL_INFOR_NOTICE, NAME_INFOR_NOTICE, PHONE_INFOR_NOTICE } from "@/constants"
import { useState } from "react"
import { useSelector } from "react-redux"
import { EditInfor } from "../EditInfor"

export const UserInfor = () => {
  const { user = {} } = useSelector((state: any) => state.auth)
  const [editing, setEditing] = useState("")
  console.log(editing)

  return (
    <div>
      <EditInfor
        name="name"
        label="Tên pháp lý"
        infor={user.name}
        setEditing={setEditing}
        notice={NAME_INFOR_NOTICE}
        disabled={editing !== "name" && editing !== ""}
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
      />
      <div className="my-6">
        <LineBreak className={editing === "" ? "" : "opacity-20"} />
      </div>

      <EditInfor
        name="phoneNumber"
        label="Số điện thoại"
        infor={user.phone}
        setEditing={setEditing}
        notice={PHONE_INFOR_NOTICE}
        disabled={editing !== "phoneNumber" && editing !== ""}
      />
      <div className="my-6">
        <LineBreak className={editing === "" ? "" : "opacity-20"} />
      </div>

      <EditInfor
        name="gender"
        label="Giới tính"
        infor={user.gender ? "Nam" : "Nữ"}
        options={["Nam", "Nữ"]}
        setEditing={setEditing}
        disabled={editing !== "gender" && editing !== ""}
      />
    </div>
  )
}
