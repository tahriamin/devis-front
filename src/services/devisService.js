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

export const createDevis = async (devis) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/devis`, devis);
    return response.data;
  } catch (error) {
    console.error("Erreur API:", error);
    throw error;
  }
};

export const deleteDevis = async (id) => {
  const response = await fetch(`${API_BASE_URL}/devis/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la suppression du devis");
  }
};
