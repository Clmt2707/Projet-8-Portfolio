import React from "react";
import '../Layout/Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
/*
function Footer() {
    return (
        <footer>
            <div className="footer__icons">
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={faLinkedinIn} />
                <FontAwesomeIcon icon={faGithub} />
            </div>
            <p>© 2024 Clément Deboeuf, Tous droits réservés.</p>
           
            <div className="back-to-top">
                <a href="#top">
                    <FontAwesomeIcon icon={faAngleUp} size="2x" />
                </a>
            </div>
        </footer>
    );
}
*/

import SocialLinks from '../components/SocialLinks/SocialLinks';

function Footer() {
    return (
        <footer>
            <div className="footer-socials">
                <SocialLinks />
            </div>
            <p>© 2024 Clément Deboeuf, Tous droits réservés.</p>
            <div className="back-to-top">
                <a href="#top">
                    <FontAwesomeIcon icon={faAngleUp} size="2x" />
                </a>
            </div>
        </footer>
    )
}
export default Footer;