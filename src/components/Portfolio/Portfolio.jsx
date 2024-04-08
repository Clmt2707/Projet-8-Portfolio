import React from "react";
import '../Portfolio/Portfolio.scss';
import projetsData from '../../assets/projets.json';
import Project from "../Projet/Projet";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Projets</h2>
            <div className="portfolio">
                {projetsData.map((projet, index) => (
                    <Project key={index} projet={projet} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;