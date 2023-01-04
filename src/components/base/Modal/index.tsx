/* eslint-disable no-nested-ternary */
import cn from "classnames"
import { ComponentType, ReactNode } from "react"
import ReactModal from "react-modal"
import ModalContent from "./ModalContent"

const MODAL_MARGIN = 20
const TRANSITION_DURATION = 200
const MODAL_SIZE = { small: "320px", medium: "650px", large: "890px", full: "100vw" }
const MODAL_TOP: { [key: string]: string } = { center: "35%", bottom: "85%" }

export const Modal = ({
  isOpen,
  overlayAuxClassName = null,
  reactModalProps = {},
  position = "center",
  onClose,
  size = "medium",
  ...props
}: ModalType) => {
  ReactModal.setAppElement("body")

  const ModalSafeForReact18 = ReactModal as ComponentType<ReactModal["props"]>

  const reactModalContentStyle = {
    content: {
      padding: 0,
      border: "none",
      bottom: "auto",
      top: `${MODAL_TOP[position]}` || `${MODAL_MARGIN}px`,
      left: position === "left" ? "50%" : "0",
      right: position === "right" ? "50%" : "0",
      margin: `auto auto ${MODAL_MARGIN}px`,
      width: `calc(100% - ${MODAL_MARGIN}px)`,
      maxHeight: `calc(100% - ${MODAL_MARGIN * 2}px)`,
      maxWidth: `${MODAL_SIZE[size]}` || "650px",
      boxShadow: "var(--drop-shadow)",
      borderRadius: "12px",
    },
    overlay: {
      backdropFilter: "blur(12px)",
    },
  }

  return (
    <ModalSafeForReact18
      isOpen={!!isOpen}
      ariaHideApp={false}
      style={reactModalContentStyle}
      closeTimeoutMS={TRANSITION_DURATION}
      overlayClassName={cn(overlayAuxClassName)}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      {...reactModalProps}
    >
      <ModalContent {...{ ...props, onClose }} />
    </ModalSafeForReact18>
  )
}

type ModalType = {
  isOpen: boolean
  reactModalProps: object
  overlayAuxClassName: string | null
  position: "top" | "left" | "bottom" | "right" | "center"
  onClose: () => void
  size: "small" | "medium" | "large" | "full"
  title: string
  children: ReactNode
  headerClassName: string
  contentClassName: string
  isLoading: boolean
}

export default Modal
