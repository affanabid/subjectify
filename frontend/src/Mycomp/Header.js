import React from "react";
import { Link } from "react-router-dom";
import logo from "./Images/logo.png";
import './styles/Header.css'

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="Header-body">
      <Link className="logo" to="/">
        <img src={logo} alt="Logo" style={{ height: "40px" }} />
      </Link>

      <ul className="navlist">
        <a href="#about" onClick={() => scrollToSection('about')}>About</a>
        <a href="#members" onClick={() => scrollToSection('members')}>Members</a>
        <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
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
