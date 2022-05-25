import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/registration">Registration</Link>
        </li>
        <li>
          <Link className="link" to="/torte">Torte</Link>
        </li>
        <li>
          <Link className="link" to="/details">Details</Link>
        </li>
        <li>
          <Link className="link" to="/showcase">Showcase</Link>
        </li>
        
      </ul>
    </nav>
  );
};
export default Navbar;
