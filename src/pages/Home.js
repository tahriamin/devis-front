import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bienvenue sur le site de gestion des devis</h1>
      <Link to="/login">Se connecter</Link> | <Link to="/register">S'inscrire</Link>
    </div>
  );
};

export default Home;
