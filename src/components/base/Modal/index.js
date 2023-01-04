/* eslint-disable no-nested-ternary */
import cn from "classnames"
import PropTypes from "prop-types"
import ReactModal from "react-modal"

import ModalContent from "./ModalContent"

const MODAL_MARGIN = 20
const TRANSITION_DURATION = 200
const MODAL_SIZE = { small: "320px", medium: "650px", large: "890px", full: "100vw" }
const MODAL_TOP = { center: "35%", bottom: "85%" }

export const Modal = ({
  isOpen,
  overlayAuxClassName,
  reactModalProps,
  position,
  onClose,
  size,
  ...props
}) => {
  ReactModal.setAppElement("body")

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
    <ReactModal
      isOpen={!!isOpen}
      ariaHideApp={false}
      style={reactModalContentStyle}
      closeTimeoutMS={TRANSITION_DURATION}
      overlayClassName={cn(overlayAuxClassName)}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      {...reactModalProps}
    >
      <ModalContent {...{ onClose, ...props }} />
    </ReactModal>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  reactModalProps: PropTypes.object,
  overlayAuxClassName: PropTypes.string,
  position: PropTypes.oneOf(["top", "left", "bottom", "right", "center"]),
  size: PropTypes.oneOf(["small", "medium", "large", "full"]),
  ...ModalContent.propTypes,
}

Modal.defaultProps = {
  reactModalProps: {},
  overlayAuxClassName: null,
  position: "center",
  size: "medium",
}

export default Modal
