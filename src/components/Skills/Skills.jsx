//Affichage de toutes les compétences

import React from "react";
import Skill from "./Skill";
import '../Skills/Skills.scss';
import { faHtml5, faCss3, faJs, faReact, faSass, faNodeJs, faGithub } from "@fortawesome/free-brands-svg-icons";


const Skills = () => {
    //Définition des skills
    const skills = [
        { name:'HTML5', icon: faHtml5 },
        { name:'CSS3', icon: faCss3 },
        { name:'Javascript', icon: faJs },
        { name:'React', icon: faReact },
        { name:'SASS', icon: faSass },
        { name:'Node JS', icon: faNodeJs },
        { name:'Github' , icon: faGithub }
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills">
                { skills.map(( skill, index ) => (
                    <Skill key={index} name={skill.name} icon={skill.icon} />
                ))}
            </div>
        </section>
    );
};

export default Skills;