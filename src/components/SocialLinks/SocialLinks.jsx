import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";

//Création des liens réseaux sociaux, utlisation des icones FontAwesome

const SocialLinks = () => {
    return (
        <div className="socials">    
            <ul>
                <li>
                    <a
                        href="https://github.com/Clmt2707"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Github profile"
                    >
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/clement-deboeuf-web-frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Linkedin Profile"
                    >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/CleDbf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter profile"
                    >
                    <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks;