import React, { useState } from "react";
import { createDevis } from "../services/devisService";
import { useNavigate } from "react-router-dom";

const CreateDevis = () => {
  const [clientNom, setClientNom] = useState("");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDevis = { clientNom, details, budget };
    await createDevis(newDevis);
    navigate("/devis");
  };

  return (
    <div>
      <h1>Créer un devis</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom du client" value={clientNom} onChange={(e) => setClientNom(e.target.value)} required />
        <textarea placeholder="Détails du devis" value={details} onChange={(e) => setDetails(e.target.value)} required />
        <input type="number" placeholder="Budget" value={budget} onChange={(e) => setBudget(e.target.value)} required />
        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default CreateDevis;
