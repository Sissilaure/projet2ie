import React, { useState } from 'react'; 
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState("");

    
    const handleInscription = () => {
        if(email) {
            alert(`Merci ! Vous êtes inscrit avec l'email : ${email}`);
            setEmail(""); 
        } else {
            alert("Veuillez entrer un email valide.");
        }
    };

    return (
        <div className="newsletter-container">
            <h3 className="newsletter-title">Newsletter</h3>
            <p className="newsletter-text">
                Veuillez vous inscrire 
            </p>
            
            <div className="newsletter-form">
                <input 
                    type="email" 
                    placeholder="Votre email..." 
                    className="newsletter-input"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                    className="newsletter-button" 
                    onClick={handleInscription} 
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default Newsletter;