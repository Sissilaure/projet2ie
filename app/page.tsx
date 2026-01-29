
  "use client";

import Header from "@/components/Header";
import FicheEtudiant from "../components/FicheEtudiant";
import ListeCours from "@/components/ListeCours";
import Newsletter from "@/components/Newsletter"; 

const Page = () => {

  const etudiant = {
    nom: "Yameogo",
    prenom: "Sylviane",
    genre: "Femme",
    filiere: "developpenent web"
  };

  
  const listeCours = [
    { id: 1, nom: "C++", description: "Programmation Orientée Objet" },
    { id: 2, nom: "Map", description: "Systèmes d'Information Géographique" },
    { id: 3, nom: "Techic", description: "Techniques Informatiques" },
    { id: 4, nom: "Xuperfly", description: "Framework Web" }
  ];

  return (
    <div className="main-page">
      
      <Header />

      
      <div className="content-wrapper">
        
        
        <div className="left-column">
          <FicheEtudiant 
            nom={etudiant.nom}
            prenom={etudiant.prenom}
            genre={etudiant.genre}
            filiere={etudiant.filiere}
          />
          
          <Newsletter />
        </div>

      
        <div className="right-column">
          
          <ListeCours cours={listeCours} />
        </div>

      </div>
    </div>
  );
};

export default Page;
