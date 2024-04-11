import React from "react";
import '../About/About.scss';
import photo  from '../../assets/clement_deboeuf.webp';

const About = () => {
    return (
        <section id="about">
            <div className="about">
                <h2>À propos</h2>
                <div className="about__container">
                    <div className="about__container__image">
                        <img src={ photo } alt="Clement Deboeuf" />
                    </div>
                    <div className="about__container__content">
                        <h3>Clément Deboeuf</h3>
                        <p>32 ans</p>
                        <p>Cuisinier passionné depuis plus de huit ans, je me suis récemment lancé dans le développement web. Fusionnant expérience en cuisine et un fort intérêt pour le développement, j'apporte mon expérience en gestion du temps, en travail d'équipe et en souci du détail. Je suis constamment à la recherche de nouvelles opportunités pour apprendre et repousser mes limites.</p>
                    </div>
                </div>
                <div className="about__button">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        Voir mon Cv
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;