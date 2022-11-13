import { Link } from "react-router-dom";
import './MenuComponent.scss';

export default function MenuComponent() {
  return (
    <nav className="menu-container">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/gallery">
        Gallery
      </Link>
      <Link className="link" to="/contact-us">
        Contact us
      </Link>
    </nav>
  )
}
