import React from "react";
import '../Contact/Contact.scss';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <p>N'hésitez pas à me contacter</p>
            <form>
                <input type="text" placeholder="Nom" />
                <input type="email" placeholder="Adresse e-mail"/>
                <textarea placeholder="Votre message"/>
                <button type="submit">Me contacter</button>
            </form>
        </section>
    );
};

export default Contact;