import { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length < 3) return;
    login(username.trim());
    navigate("/game");
  };

  return (
    <section className="page">
      <h2>Iniciar sesión</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button className="btn-primary">Entrar</button>
      </form>
    </section>
  );
}