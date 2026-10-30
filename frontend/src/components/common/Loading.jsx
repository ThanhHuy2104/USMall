const Loading = ({ label = 'Đang tải...', className = '' }) => {
  return (
    <div aria-live="polite" className={className} role="status">
      {label}
    </div>
  )
}

export default Loading
