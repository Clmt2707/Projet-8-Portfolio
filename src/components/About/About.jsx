import React from "react";
import '../About/About.scss';
import photo  from '../../assets/clement_deboeuf.webp';

const About = () => {
    return (
        <section id="about">
            <div className="about">
                <h2>About</h2>
                <div className="about__container">
                    <div className="about__container__image">
                        <img src={ photo } alt="Clement Deboeuf" />
                    </div>
                    <div className="about__container__content">
                        <h3>Clément Deboeuf</h3>
                        <p>32 yo</p>
                        <p>A passionate cook for more than eight years, I recently launched into web development. Merging experience in cooking and a strong interest in development, I bring my experience in time management, teamwork and attention to detail. I am constantly on the lookout for new opportunities to learn and push my limits.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;