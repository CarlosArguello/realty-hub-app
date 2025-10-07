import { Link } from "react-router-dom"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import Icon from "../assets/realty-hub-icon.svg?react"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-12 max-w-7xl items-center px-4">
        <Link to="/" aria-label="Home" className="inline-flex items-center">
          <Icon className="h-10 w-10" />
        </Link>
      </div>
    </header>
  )
}

export default Header
