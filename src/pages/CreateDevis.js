import React, { useState } from "react";
import { createDevis } from "../services/devisService";
import { useNavigate } from "react-router-dom";
import "./CreateDevis.css";

const CreateDevis = () => {
  const [clientNom, setClientNom] = useState("");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newDevis = {
        clientNom,
        details,
        budget: parseFloat(budget), // important de convertir
      };
  
      const response = await createDevis(newDevis);
  
      if (response) {
        alert("✅ Devis créé avec succès !");
        navigate("/devis");
      }
    } catch (error) {
      console.error("❌ Erreur lors de la création du devis :", error);
      alert("Erreur lors de la création du devis.");
    }
  };
  
  return (
    <div className="create-devis-container">
      <h1>Créer un Devis</h1>
      {successMessage && <div className="success-popup">{successMessage}</div>}

      <form className="devis-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom du client" value={clientNom} onChange={(e) => setClientNom(e.target.value)} required />
        <textarea placeholder="Détails du devis" value={details} onChange={(e) => setDetails(e.target.value)} required />
        <input type="number" placeholder="Budget (€)" value={budget} onChange={(e) => setBudget(e.target.value)} required />
        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default CreateDevis;
