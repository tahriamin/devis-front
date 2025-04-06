import axios from "axios";
import API_BASE_URL from "../config";

// 🔹 Récupérer tous les utilsateurs
export const getUtilisateurByEmail = async (email) => {
  const response = await fetch(`${API_BASE_URL}/utilisateurs/${email}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Utilisateur ou mot de passe incorrect");
  }
};


