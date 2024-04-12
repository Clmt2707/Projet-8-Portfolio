import React from "react";
import '../Layout/Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import SocialLinks from '../components/SocialLinks/SocialLinks';

function Footer() {
    return (
        <footer>
            <div className="footer-socials">
                <SocialLinks />
            </div>
            <p>© 2024 Clément Deboeuf, Tous droits réservés.</p>
            <div className="back-to-top">
                <a href="#top" aria-label="Retour en haut de la page">
                    <FontAwesomeIcon icon={faAngleUp} size="2x" />
                </a>
            </div>
        </footer>
    )
}
export default Footer;