import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getUtilisateurByEmail } from "../services/utilisateurService"; // Importation de la fonction
import API_BASE_URL from "../config";
import "./Login.css"; // ⚠️ ajoute ce fichier CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(""); // État pour l'erreur de connexion

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // On essaie de récupérer l'utilisateur par email
      await getUtilisateurByEmail(email);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message); // Affiche un message d'erreur si l'utilisateur n'est pas trouvé ou autre erreur
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>} {/* Affichage du message d'erreur */}
        <button type="submit">Se connecter</button>
        <p className="note">Pas encore inscrit ? Créez un compte !</p>
      </form>
    </div>
  );
};

export default Login;
