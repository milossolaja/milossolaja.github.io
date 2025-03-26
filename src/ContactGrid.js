import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaGoogle } from "react-icons/fa6";



const ContactGrid = () => {

    const ContactButton = ({ href, icon: Icon }) => (
        <button className="contact-button" onClick={() => window.open(href, "_blank")}>
            <Icon />
        </button>
    );


    return (
        <div className="contact-grid">
            {[
                { href: "https://github.com/milossolaja", icon: FaGithub },
                { href: "https://www.linkedin.com/in/milossolaja/", icon: FaLinkedin },
                { href: "https://x.com/MilosSolaja", icon: FaXTwitter },
                { href: "https://instagram.com/milossolaja/", icon: FaInstagram },
                { href: `mailto:milossolaja96@gmail.com?subject=${encodeURIComponent("Contact me")}&body=${encodeURIComponent("Hello, I would like to get in touch.")}`, icon: FaGoogle }
            ].map((contact, index) => (
                <ContactButton key={index} {...contact} />
            ))}
        </div>
        );
}

export default ContactGrid;