import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "./Images/logo.png";
import './styles/Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false); // Close menu on click

    if (location.pathname !== '/') {
      // If not on the Hero page, navigate to Hero and pass sectionId in state
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If already on the Hero page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Header-body">
      <Link 
        className="logo" 
        to="/"
        onClick={() => {
          if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          setIsMenuOpen(false); // Close menu on click
        }}
      >
        <img src={logo} alt="Logo" style={{ height: "40px" }} />
      </Link>

      <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navlist ${isMenuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#members" onClick={(e) => { e.preventDefault(); scrollToSection('members'); }}>Members</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </ul>

      {/* <div className="rightnav">
        <div className="signup">
          <Link to="/Signup">Sign Up </Link>
        </div>
        <div className="login">
          <Link to="/LOgin">Login </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
