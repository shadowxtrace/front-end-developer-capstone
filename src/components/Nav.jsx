import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link">Menu</Link>
        </li>
        <li className="nav-item">
          <Link to="/booking" className="nav-link">Reservations</Link>
        </li>
        <li className="nav-item">
          <Link to="/order" className="nav-link">Order Online</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;