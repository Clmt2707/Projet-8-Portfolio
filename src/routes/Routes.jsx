import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "../components/Home/Home";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Header from "../Layout/Header";

function RoutesPath() {
    return (
        <Router>
            <div className="routes">
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/about" element={<About />}/>
                    <Route exact path="/skills" element={<Skills />}/>
                    <Route exact path="/portfolio" element={<Portfolio />}/>
                    <Route exact path="/contact" element={<Contact />}/>
                </Routes>
            </div>
        </Router>
    );
};

export default RoutesPath;