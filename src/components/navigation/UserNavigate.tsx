import { AuthMenu } from "@/components/menu"
import { useMouseLeave } from "@/hooks"
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai"

const UserNavigate = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>()

  return (
    <div className="relative py-2.5" ref={ref}>
      <button className="border-grey-100 my-2 flex items-center justify-around rounded-full border border-solid px-3 py-2">
        <AiOutlineMenu />
        <AiOutlineUser />
      </button>
      <AuthMenu isOpen={isMouseIn} />
    </div>
  )
}
export default UserNavigate
