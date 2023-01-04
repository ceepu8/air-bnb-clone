import cn from "classnames"
import PropTypes from "prop-types"

import Spin from "../Spin"
import ModalHeader from "./ModalHeader"

const ModalContent = ({
  title,
  onClose,
  children,
  headerClassName,
  contentClassName,
  isLoading,
  ...props
}) => (
  <div {...props}>
    <ModalHeader {...{ title, onClose, headerClassName }} />
    <div className={cn(contentClassName)}>
      {children}
      {isLoading && (
        <div className="flex-center h-full w-full">
          <Spin />
        </div>
      )}
    </div>
  </div>
)

ModalContent.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  isLoading: PropTypes.bool,
}

ModalContent.defaultProps = {
  title: ModalHeader.defaultProps.title,
  isLoading: false,
}

export default ModalContent
