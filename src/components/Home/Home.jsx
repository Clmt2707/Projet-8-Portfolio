import React from "react";
import "../Home/Home.scss";
import SocialLinks from "../SocialLinks/SocialLinks";
import photo from '../../assets/clement_sticker.webp';

//Section Home(page d'accueil)

const Home = () => {
    return (
        <section id="home">
            <div className="homeSection">
                <h1>Salut,<br />Je suis Clément Deboeuf.<br />
                <span>Développeur web</span></h1>
                <img src={photo} alt="Sticker représentant Clement Deboeuf" />
                <SocialLinks />
            </div>
        </section>
    );
};

export default Home;