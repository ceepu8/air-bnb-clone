import cn from "classnames"
import PropTypes from "prop-types"
import { MdClose } from "react-icons/md"

const ModalHeader = ({ title, onClose, headerClassName }) => (
  <div className={cn("flex items-center justify-between px-10 py-6", headerClassName)}>
    <h3 className="text-lg font-bold">{title}</h3>
    <MdClose className="h-6 w-6 cursor-pointer" onClick={onClose} />
  </div>
)

ModalHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
}

ModalHeader.defaultProps = {
  title: "",
}

export default ModalHeader
