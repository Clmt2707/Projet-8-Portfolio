import React from "react";
import Logo from "../assets/logo.webp";
import "../Layout/Header.scss";
import { Link } from "react-scroll";
import { useState } from "react";


function Header() {
    //Gestion de l'état du menu hamburger
    const [isMenuOpen, setIsOpen] = useState(false);
    //fonction de bascule de l"état
    const toggleMenu = () => {
      setIsOpen(!isMenuOpen);
    };

    return (
      <header className="header">
        <div className="header__logo">
            <a href="home">
                <img src={ Logo } alt="Logo" />
            </a>
        </div>
        <nav /*className="header__nav"*/ className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
          <div className="header__menu-toggle" onClick={toggleMenu}>
            <div className="header__menu-bar"></div>
            <div className="header__menu-bar"></div>
            <div className="header__menu-bar"></div>
          </div>
          <ul>
            <li><Link activeClass="active" to="home" spy smooth offset={-100} duration={500}>Home</Link></li>
            <li><Link activeClass="active" to="about" spy smooth offset={-100} duration={500}>About</Link></li>
            <li><Link activeClass="active" to="portfolio" spy smooth offset={-100} duration={500}>Portfolio</Link></li>
            <li><Link activeClass="active" to="skills" spy smooth offset={-100} duration={500}>Skills</Link></li>
            <li><Link activeClass="active" to="contact" spy smooth offset={-100} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  


export default Header;