const Modal = ({ isOpen, children, onClose, className = '' }) => {
  if (!isOpen) return null

  return (
    <div className={`modal-backdrop ${className}`} role="presentation" onClick={onClose}>
      <section
        aria-modal="true"
        className="modal-content"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </section>
    </div>
  )
}

export default Modal
