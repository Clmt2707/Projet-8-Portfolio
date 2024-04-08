import React from "react";
import '../Projet/Projet.scss';

const Project = ({ projet }) => {
    return(
        <div className="project">
            <img src={require(`../../assets/images/${projet.image}`)} alt={projet.title}/>
            <h3>{projet.title}</h3>
        </div>
    );
}

export default Project;