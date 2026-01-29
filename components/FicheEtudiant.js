import React from 'react';
import './FicheEtudiant.css'; 

const FicheEtudiant = (props) => {
    return (
        <div className="fiche-container">
            <h2 className="fiche-title">Fiche Étudiant</h2>
      
            <div className="fiche-info">
                <span className="fiche-label">Nom:</span>
                <span className="fiche-value">{props.nom}</span>
            </div>
      
            <div className="fiche-info">
                <span className="fiche-label">Prénom:</span>
                <span className="fiche-value">{props.prenom}</span>
            </div>
      
            <div className="fiche-info">
                <span className="fiche-label">Genre:</span>
                <span className="fiche-value">{props.genre}</span>
            </div>
      
            <div className="fiche-info">
                <span className="fiche-label">Filière:</span>
                <span className="fiche-value">{props.filiere}</span>
            </div>
        </div>
    );
};

export default FicheEtudiant;