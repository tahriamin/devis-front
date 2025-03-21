import axios from "axios";
import API_BASE_URL from "../config";

// Requête pour récupérer tous les devis
export const getDevis = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/devis`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des devis :", error);
    return [];
  }
};

// Requête pour créer un devis
export const createDevis = async (devisData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/devis`, devisData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création du devis :", error);
    return null;
  }
};
