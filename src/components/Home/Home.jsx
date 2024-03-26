import React from "react";
import "../Home/Home.scss";
import SocialLinks from "../SocialLinks/SocialLinks";

const Home = () => {
    return (
        <div className="homeSection">
            <h1>Hello,<br /> I'm Clement Deboeuf.<br />
            <span>Web Developper</span></h1>
            <SocialLinks />
        </div> 
    );
};

export default Home;