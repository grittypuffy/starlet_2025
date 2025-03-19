import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle Menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="nav-container">
      <img className="logo" src={logo} alt="logo" />

      {/* Menu Icon */}
      <button className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Links (Full Width on Mobile) */}
      <ul ref={menuRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><button className="secondary-button" onClick={() => setMenuOpen(false)}>Prizes</button></li>
        <li><button className="secondary-button" onClick={() => setMenuOpen(false)}>Sponsors</button></li>
        
        <li><button className="secondary-button" onClick={() => setMenuOpen(false)}>Schedule</button></li>
        <li><button className="btn btn-dark primary" onClick={() => setMenuOpen(false)}>Register Now</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
