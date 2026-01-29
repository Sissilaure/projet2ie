// "use client"
// import FicheEtudiant from "../components/FicheEtudiant";
// // import ListeCours from '@/components/ListeCours';
// // import Newsletter from '@/components/Newsletter';
// // ❌ RETIRE CETTE LIGNE : import '../styles/globals.css';

// const App = () => {
//   // Données pour les props
//   const etudiant = {
//     nom: "SANOGO",
//     prenom: "Dramine",
//     genre: "Homme",
//     filiere: "Informatique"
//   };

//   // ✅ AJOUTE LE RETURN !
//   return (
//     <div>
//       <h1>Test</h1>
//       <FicheEtudiant 
//         nom={etudiant.nom}
//         prenom={etudiant.prenom}
//         genre={etudiant.genre}
//         filiere={etudiant.filiere}
//       />
//     </div>
//   );
// };

// "use client";

// Assure-toi que le chemin "../components/FicheEtudiant" est correct par rapport à l'emplacement de ton fichier pages.tsx
// import Header from "@/components/Header";
// import FicheEtudiant from "../components/FicheEtudiant";
// import ListeCours from "@/components/ListeCours";
// // import Newsletter from "@/components/Newsletter";
// const Page = () => {
//   // Données pour les props
//   const etudiant = {
//     nom: "SANOGO",
//     prenom: "Dramine",
//     genre: "Homme",
//     filiere: "Informatique"
//   };

//   return (
//     <div>
//       <h1>Test</h1>
//       <FicheEtudiant 
//         nom={etudiant.nom}
//         prenom={etudiant.prenom}
//         genre={etudiant.genre}
//         filiere={etudiant.filiere}
//       />
//     </div>
//   );
// };

// export default Page;

// export default App;

  // const listeCours = [
  //   { id: 1, nom: "Programmation Web", code: "INF301" },
  //   { id: 2, nom: "Base de données", code: "INF302" },
  //   { id: 3, nom: "Algorithmes", code: "INF303" },
  //   { id: 4, nom: "Réseaux", code: "INF304" },
  //   { id: 5, nom: "Génie Logiciel", code: "INF305" }
  // ];

  // return (
  //   <div>
  //     {/* En-tête avec logo 2iE en haut à droite */}
  //     <header className="header">
  //       <div className="header-content">
  //         <h1 className="title">Application Étudiant</h1>
          
  //         {/* Logo 2iE en haut à droite */}
  //         <div className="logo-container">
  //           <img 
  //             src="/logo-2ie.svg" 
  //             alt="Logo 2iE" 
  //             className="logo"
  //           />
  //         </div>
  //       </div>
  //     </header>


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
