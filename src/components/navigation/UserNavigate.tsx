import { AuthMenu } from "@/components/menu"
import { useMouseLeave } from "@/hooks"
import { AiOutlineMenu } from "react-icons/ai"
import { HiUserCircle } from "react-icons/hi"

const UserNavigate = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>()

  return (
    <div className="relative py-2.5" ref={ref}>
      <button className="my-2 flex items-center justify-around rounded-full border border-solid border-light-gray px-2 py-1 shadow hover:shadow-lg">
        <AiOutlineMenu className="mr-2 h-5 w-5" />
        <HiUserCircle className="h-8 w-8 fill-dark-gray" />
      </button>
      <AuthMenu isOpen={isMouseIn} />
    </div>
  )
}
export default UserNavigate
