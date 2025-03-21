import React, { useEffect, useState } from "react";
import { getDevis } from "../services/devisService";
import { Link } from "react-router-dom";

const DevisList = () => {
  const [devisList, setDevisList] = useState([]);

  useEffect(() => {
    getDevis().then((data) => setDevisList(data));
  }, []);

  return (
    <div>
      <h1>Liste des devis</h1>
      <ul>
        {devisList.map((devis) => (
          <li key={devis.id}>
            <Link to={`/devis/${devis.id}`}>{devis.clientNom} - {devis.budget}€</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevisList;
