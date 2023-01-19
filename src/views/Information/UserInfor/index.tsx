import { Button, LineBreak } from "@/components"
import { useSelector } from "react-redux"

export const UserInfor = () => {
  const { user = {} } = useSelector((state: any) => state.auth)
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-light">Tên pháp lý</h3>
          <p className="text-sm font-light text-dark-gray">{user.name}</p>
        </div>
        <div>
          <Button size="small" variant="light" className="shadow-none">
            Chỉnh sửa
          </Button>
        </div>
      </div>
      <div className="my-6">
        <LineBreak />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-light">Địa chỉ email</h3>
          <p className="text-sm font-light text-dark-gray">{user.email}</p>
        </div>
        <div>
          <Button size="small" variant="light" className="shadow-none">
            Chỉnh sửa
          </Button>
        </div>
      </div>
      <div className="my-6">
        <LineBreak />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-light">Số điện thoại</h3>
          <p className="text-sm font-light text-dark-gray">{user.phone}</p>
        </div>
        <div>
          <Button size="small" variant="light" className="shadow-none">
            Chỉnh sửa
          </Button>
        </div>
      </div>
      <div className="my-6">
        <LineBreak />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-light">Giới tính</h3>
          <p className="text-sm font-light text-dark-gray">{user.gender ? "Nam" : "Nữ"}</p>
        </div>
        <div>
          <Button size="small" variant="light" className="shadow-none">
            Chỉnh sửa
          </Button>
        </div>
      </div>
      <div className="my-6">
        <LineBreak />
      </div>
    </div>
  )
}
