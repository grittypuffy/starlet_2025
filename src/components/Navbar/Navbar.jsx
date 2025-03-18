import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Install with: npm install react-icons
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-container">
      <img className="logo" src={logo} alt="logo" />

      {/* Menu Icon for Mobile */}
      <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars size={24} />
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><button className="btn btn-warning">Home</button></li>
        <li><button className="btn btn-warning">Schedule</button></li>
        <li><button className="btn btn-warning">Prizes</button></li>
        <li><button className="btn btn-warning">Sponsors</button></li>
        <li><button className="btn btn-warning">FAQs</button></li>
        <li><button className="btn btn-dark primary">Register Now</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
