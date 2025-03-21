import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Tableau de bord</h1>
      <Link to="/create-devis">Créer un devis</Link> | <Link to="/devis">Voir les devis</Link>
    </div>
  );
};

export default Dashboard;
