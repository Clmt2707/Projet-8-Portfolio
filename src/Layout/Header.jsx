import React from "react";
import SmallLogo from "../assets/logo_small.webp";
import "../Layout/Header.scss";
import { Link } from "react-scroll";
import { useState } from "react";
import Hamburger from 'hamburger-react';

function Header() {
    //Gestion de l'état du menu hamburger pour les écrans inférieurs à 769px
    const [isOpen, setIsOpen] = useState(false);
   
    //fonction de bascule de l"état
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    //gestion de l'offset en fonction de la taille d'écran
    const offset = window.innerWidth < 768 ? -90 : -100;

    return (
      <header className="header">
        <div className="header__logo">
          <img src={ SmallLogo} alt="logo de clement deboeuf" />
        </div>
        <nav className={`header__nav ${isOpen ? 'active' : 'closed'}`}>
          <ul>
            <li><Link activeClass="active" to="home" spy smooth offset={offset} duration={500} onClick={() => setIsOpen(false)}>Accueil</Link></li>
            <li><Link activeClass="active" to="about" spy smooth offset={offset} duration={500} onClick={() => setIsOpen(false)}>À propos</Link></li>
            <li><Link activeClass="active" to="portfolio" spy smooth offset={offset} duration={500} onClick={() => setIsOpen(false)}>Portfolio</Link></li>
            <li><Link activeClass="active" to="skills" spy smooth offset={offset} duration={500} onClick={() => setIsOpen(false)}>Skills</Link></li>
            <li><Link activeClass="active" to="contact" spy smooth offset={offset} duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
        <div className={`header__menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <Hamburger size={24} color="#f5f5f5" toggled={isOpen} toggle={setIsOpen} />
        </div>
      </header>
    );
  }

export default Header;
   
   