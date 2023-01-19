import { Button, LineBreak } from "@/components"

export const UserInfor = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-light">Tên pháp lý</h3>
          <p className="text-sm font-light text-dark-gray">Uyen Cao</p>
        </div>
        <div>
          <Button size="small" variant="light">
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
          <p className="text-sm font-light text-dark-gray">caophuonguyen132002@gmail.com</p>
        </div>
        <div>
          <Button size="small" variant="light">
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
          <p className="text-sm font-light text-dark-gray">0969634915</p>
        </div>
        <div>
          <Button size="small" variant="light">
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
          <p className="text-sm font-light text-dark-gray">Nữ</p>
        </div>
        <div>
          <Button size="small" variant="light">
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
