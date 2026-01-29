import React from 'react';
import './ListeCours.css';

const ListeCours = ({ cours }) => {
    return (
        <div className="cours-container">
            <h3 className="cours-title">Liste des Cours</h3>
            
            <ul className="cours-list">
            
                {cours.map((c) => (
                
                    <li key={c.id} className="cours-item">
                        <span className="cours-name">{c.nom}</span>
                        <span className="cours-desc">{c.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListeCours;