import React from "react";
import '../About/About.scss';
import photo  from '../../assets/clement_deboeuf.webp';

const About = () => {
    const [cv, setCV] = React.useState(null);

    React.useEffect(() => {
        import("../../assets/Clément_Deboeuf_CV.pdf")
        .then((module) => {
            setCV(module.default);
        })
        .catch((error) => {
            console.error("Failed to load the CV:", error);
            setCV("https://clementdeboeuf.fr/static/media/Clément_Deboeuf_CV.pdf");
        });
    }, []);

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
                        <p>Cuisinier passionné pendant 7 ans, je me suis récemment reconverti dans le développement web. Mes précédentes expériences m'ont permis d'acquérir des compétences en gestion du temps, travail d'équipe et en souci du détail. Je suis constamment à la recherche de nouvelles opportunités pour apprendre et repousser mes limites.</p>
                    </div>
                </div>
                <div className="about__button">
                <a href={`${cv}`} target="_blank" rel="noopener noreferrer">Voir mon Cv 
                </a>
                </div>
            </div>
        </section>
    );
};

export default About;