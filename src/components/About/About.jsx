import React from "react";
import '../About/About.scss';
import photo  from '../../assets/clement_deboeuf.webp';
import cv from '../../assets/clement_deboeuf_cv.pdf';

//Section À propos

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
                        <p>Fort d'une expérience de 7 ans en tant que cuisinier passionné, j'ai récemment entrepris une reconversion réussie dans le domaine du développement web. Mes années passées en cuisine m'ont doté de compétences solides en gestion du temps, travail d'équipe et résolution de problèmes. Cette transition m'a permis d'acquérir de nouvelles compétences en développement et en conception de sites web. Mon désir constant d'apprendre et ma volonté de relever de nouveaux défis continuent de me motiver dans cette nouvelle voie.</p>
                    </div>
                </div>
                <div className="about__button">
                    <a href={cv} target="_blank" rel="noopener noreferrer">Voir mon Cv</a>
                </div>
            </div>
        </section>
    );
};

export default About;