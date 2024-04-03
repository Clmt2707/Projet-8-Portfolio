import React from "react";

const Project = ({ projet }) => {
    return(
        <div className="project">
            <img src={projet.image} alt={projet.title} />
            <h3>{projet.title}</h3>
        </div>
    );
}

export default Project;