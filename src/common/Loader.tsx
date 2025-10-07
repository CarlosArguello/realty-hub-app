import Icon from "../assets/realty-hub-icon.svg?react"

const Loader = () => (
  <div className="fixed top-0 left-0 flex items-center justify-center w-dvw h-dvh z-5 bg-white animate-pulse">
    <Icon className="h-26 w-26 animate-bounce text-gray-600" />
  </div>
)

export default Loader
