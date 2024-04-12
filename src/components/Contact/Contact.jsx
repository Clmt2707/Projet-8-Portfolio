import React from "react";
import emailjs from 'emailjs-com';
import '../Contact/Contact.scss';

const Contact = () => {
    //variables dotenv emailjs
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_USER_ID;


    //fonction pour envoyer le formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, e.target, userId)
        .then((result) => {
            console.log(result.text);
            alert('Message bien envoyé !')
        }, (error) => {
            console.log(error.text);
            alert('Une erreur s\'est produite lors de l\'envoi ! Veuillez réessayer !' )
        });

        //réinitialisation du formualire après l'envoi
        e.target.reset();
    };

    return (
        <section id="contact">
            <h2>Contact</h2>
            <p>N'hésitez pas à me contacter</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="hidden">Nom</label>
                <input type="text" id="name" name="name" placeholder="Nom" />
                <label htmlFor="email" className="hidden">Adresse email</label>
                <input type="email" id="email" name="email" placeholder="Adresse e-mail"/>
                <label htmlFor="message" className="hidden">Votre message</label>
                <textarea id="message" name="message" placeholder="Votre message"/>
                <button type="submit">Me contacter</button>
            </form>
        </section>
    );
};

export default Contact;