import React from "react";
import Logo from "../assets/logo.webp";
import SmallLogo from "../assets/logo_small.webp";
import "../Layout/Header.scss";
import { Link } from "react-scroll";
import { useState } from "react";


function Header() {
    //Gestion de l'état du menu hamburger
    const [isOpen, setIsOpen] = useState(false);
    //fonction de bascule de l"état
    const toggleMenu = () => {
      setIsOpen(!isOpen);
      const nav = document.querySelector('.header__nav');
      if(!isOpen) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    };

    //Réglages d'offset pour les liens en fonciton de la taille d'écran
    const offset = window.innerWidth < 768 ? -70 : -100;

    //Taille de logo en fonction de l'écran
    const image = window.innerWidth <768 ? SmallLogo : Logo;
   
    return (
      <header className="header">
        <div className="header__logo">
            <a href="home">
                <img src={ image} alt="Logo" />
            </a>
        </div>
        <nav className={`header__nav ${isOpen ? 'active' : ''}`}>
          <div className="header__menu-toggle" onClick={toggleMenu}>
            <div className={`header__menu-bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`header__menu-bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`header__menu-bar ${isOpen ? 'open' : ''}`}></div>
          </div>
          <ul>
            <li><Link activeClass="active" to="home" spy smooth offset={offset} duration={500}>Home</Link></li>
            <li><Link activeClass="active" to="about" spy smooth offset={offset} duration={500}>About</Link></li>
            <li><Link activeClass="active" to="portfolio" spy smooth offset={offset} duration={500}>Portfolio</Link></li>
            <li><Link activeClass="active" to="skills" spy smooth offset={offset} duration={500}>Skills</Link></li>
            <li><Link activeClass="active" to="contact" spy smooth offset={offset} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
 

export default Header;