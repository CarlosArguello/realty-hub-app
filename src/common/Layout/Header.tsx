import { Link } from "react-router-dom"
import Icon from "../../assets/realty-hub-icon.svg?react"
import Container from "./Container"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex items-center py-2">
          <Link to="/" aria-label="Home" className="inline-flex items-center">
            <Icon className="h-12 w-12 -ml-2" />
            <span className="text-2xl">
              Realty <span className="font-extrabold -ml-1">Hub</span>
            </span>
          </Link>
        </div>
      </Container>
    </header>
  )
}

export default Header
