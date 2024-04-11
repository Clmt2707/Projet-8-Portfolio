import React, { useState } from 'react';
import '../Portfolio/Portfolio.scss';
import projetsData from '../../assets/projets.json';
import Project from "../Projet/Projet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';


const Portfolio = () => {
    //États de la modale/index d'image/projet
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //fonction ouverture et fermeture modale
    const openModal = (projet) => {
        setSelectedProject(projet);
        setShowModal(true);
        document.getElementById('portfolio').classList.add('modal-open');//permet l'ajout d'un pseudo-élément pour flouter l'arriere plan de la modale
        document.body.classList.add('scroll-lock');//pour empecher le défilement
    };

    const closeModal = () => {
        setShowModal(false);
        document.getElementById('portfolio').classList.remove('modal-open');
        document.body.classList.remove('scroll-lock');
    };

    //Fonctions images précédente/suivante
    function prevImage() {
        setCurrentImageIndex(currentImageIndex === 0 ? selectedProject.images.length - 1 : currentImageIndex - 1)
    };

    function nextImage() {
        setCurrentImageIndex(currentImageIndex === selectedProject.images.length - 1 ? 0 : currentImageIndex + 1)
    };

    return (
        <section id="portfolio">
            <h2>Projets</h2>
            <div className="portfolio">
                {projetsData.map((projet, index) => (
                    <Project key={index} projet={projet} onClick={() => openModal(projet)} />
                ))}
            </div>
            {showModal && selectedProject && (
                <div className='modal'>
                        <button className='closeButton' onClick={closeModal}>x</button>
                        <h3>{selectedProject.title}</h3>
                        <p>{selectedProject.description}</p>
                        <ul>
                            {selectedProject.techno.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                        <div className='carousel'>
                            <button onClick={prevImage}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </button>
                            <img src={require(`../../assets/images/${selectedProject.images[currentImageIndex]}`)} alt="projet" />
                            <button onClick={nextImage}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </div>
                    </div>
                )}
        </section>
    );
};

export default Portfolio;