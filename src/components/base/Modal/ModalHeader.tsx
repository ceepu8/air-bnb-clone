import cn from "classnames"
import { MdClose } from "react-icons/md"

type ModalType = {
  title: string
  onClose: () => void
  headerClassName: string
}

const ModalHeader = ({ title = "", onClose, headerClassName }: ModalType) => {
  return (
    <div className={cn("flex items-center justify-between px-10 py-6", headerClassName)}>
      <h3 className="text-lg font-bold">{title}</h3>
      <MdClose className="h-6 w-6 cursor-pointer" onClick={onClose} />
    </div>
  )
}

export default ModalHeader
