import { AuthMenu } from "@/components/menu"
import { useMouseLeave } from "@/hooks"
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai"

const UserNavigate = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>()

  return (
    <div className="relative py-2.5" ref={ref}>
      <button className="my-2 flex items-center justify-around rounded-full border border-solid border-light-gray px-3 py-2 shadow hover:shadow-lg">
        <AiOutlineMenu />
        <AiOutlineUser />
      </button>
      <AuthMenu isOpen={isMouseIn} />
    </div>
  )
}
export default UserNavigate
