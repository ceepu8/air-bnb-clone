import { AuthMenu } from "@/components/menu"
import { AiOutlineMenu } from "react-icons/ai"
import { HiUserCircle } from "react-icons/hi"
import { Popover } from "../base"

const UserNavigate = () => {
  return (
    <div className="py-2.5">
      <Popover placement="bottomRight" content={<AuthMenu />}>
        <button className="my-2 flex items-center justify-around rounded-full border border-solid border-light-gray px-2 py-1 shadow hover:shadow-lg">
          <AiOutlineMenu className="mr-2 h-5 w-5" />
          <HiUserCircle className="h-8 w-8 fill-dark-gray" />
        </button>
      </Popover>
    </div>
  )
}
export default UserNavigate
