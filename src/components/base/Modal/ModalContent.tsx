import cn from "classnames"
import { ReactNode } from "react"

import Spin from "../Spin"
import ModalHeader from "./ModalHeader"

export type ModalContentType = {
  title: string
  onClose: () => void
  children: ReactNode
  headerClassName: string
  contentClassName: string
  isLoading: boolean
}

const ModalContent = ({
  title = "",
  onClose,
  children,
  headerClassName,
  contentClassName,
  isLoading = false,
  ...props
}: ModalContentType) => (
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

export default ModalContent
