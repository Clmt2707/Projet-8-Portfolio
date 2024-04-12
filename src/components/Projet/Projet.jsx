import React from "react";
import '../Projet/Projet.scss';

const Project = ({ projet, onClick }) => {
    return(
        <div className="project" onClick={onClick}>
            <img src={require(`../../assets/images/${projet.image}`)} alt={`${projet.title} projet`} loading="lazy"/>
            <h3>{projet.title}</h3>
        </div>
    );
}

export default Project;