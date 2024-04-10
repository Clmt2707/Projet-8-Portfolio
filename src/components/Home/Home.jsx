import React from "react";
import "../Home/Home.scss";
import SocialLinks from "../SocialLinks/SocialLinks";
import photo from '../../assets/clement_sticker.webp';

const Home = () => {
    return (
        <section id="home">
            <div className="homeSection">
                <h1>Hello,<br />I'm Clement Deboeuf.<br />
                <span>Web Developper</span></h1>
                <img src={photo} alt="Sticker représentant Clement Deboeuf" />
                <SocialLinks />
            </div>
        </section>
    );
};

export default Home;