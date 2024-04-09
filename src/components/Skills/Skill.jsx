//création d'un composant Skill pour représenter chaque compétence

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Skills/Skill.scss';

const Skill = ({ name, icon }) => {
    return (
        <div className="skill">
            <FontAwesomeIcon icon={icon} className="skill__icon" />
            <span>{name}</span>
        </div>
    );
}

export default Skill;