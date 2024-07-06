import * as styels from './index.css'

export type ClickProps = {
  onClick: () => void
  children: React.ReactNode
}

const Click: React.FC<ClickProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      className={styels.button}
    >
      {children}
    </button>
  )
}

export default Click
