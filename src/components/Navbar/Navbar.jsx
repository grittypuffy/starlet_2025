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

  // Scroll to EventDetails Section
  const scrollToEventDetails = () => {
    const eventDetailsElement = document.getElementById("eventdetails");

    if (eventDetailsElement) {
      eventDetailsElement.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on mobile
    } else {
      console.log("eventdetails section NOT found");
    }
  };

  // Scroll to Sponsors Section
  const scrollToSponsors = () => {
    const sponsorsDetailsElement = document.querySelector(".sponsors-section");

    if (sponsorsDetailsElement) {
      sponsorsDetailsElement.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const scrollToPrize = () => {
    const prizes = document.getElementById("prizes");
    if (prizes) {
      prizes.scrollIntoView({behaviour: "smooth"});
      setMenuOpen(false);
    } else {
      console.log("prizes not found");
    }
  };
  // Scroll to Timeline Section
  const scrollToTimeline = () => {
    console.log("Clicked Schedule button"); // Debug log
    const timelineElement = document.getElementById("timeline");

    if (timelineElement) {
      console.log("Found timeline section");
      timelineElement.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    } else {
      console.log("timeline section NOT found");
    }
  };

  return (
    <nav className="nav-container">
      <img className="logo" src={logo} alt="logo" />

      {/* Menu Icon */}
      <button className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Links (Full Width on Mobile) */}
      <ul ref={menuRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><button className="secondary-button" onClick={scrollToEventDetails}>About</button></li>
        <li><button className="secondary-button" onClick={scrollToPrize}>Prizes</button></li>
        <li><button className="secondary-button" onClick={scrollToSponsors}>Sponsors</button></li>
        <li><button className="secondary-button" onClick={scrollToTimeline}>Schedule</button></li>
        <li><button className="btn btn-dark primary" onClick={() => setMenuOpen(false)}>Register Now</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
