import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src={ Logo } alt="Logo" />
                </Link>
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;