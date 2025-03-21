import axios from "axios";
import API_BASE_URL from "../config";

// 🔹 Récupérer tous les devis
export const getDevis = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/devis`);
    return response.data;
  } catch (error) {
    console.error("Erreur API:", error);
    return [];
  }
};

// 🔹 Créer un nouveau devis
export const createDevis = async (devis) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/devis`, devis);
    return response.data;
  } catch (error) {
    console.error("Erreur API:", error);
  }
};

// 🔹 Récupérer un devis par ID
export const getDevisById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/devis/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur API:", error);
  }
};
