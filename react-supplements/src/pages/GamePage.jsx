import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../services/api";
import { isLoggedIn } from "../services/auth";

export default function GamePage() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(null);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [feedback, setFeedback] = useState("");

  const pickRandom = (list) => {
    const random = list[Math.floor(Math.random() * list.length)];
    setCurrent(random);
  };

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
      return;
    }

    getCategories().then((data) => {
      if (!data.success) return;

      setCategories(data.categories);

      // Convertimos categorías + submenus en una lista de productos con categoría real
      const allProducts = [];

      data.categories.forEach((cat) => {
        cat.submenus.forEach((prod) => {
          allProducts.push({
            ...prod,
            category: cat.name, // categoría REAL
          });
        });
      });

      setProducts(allProducts);

      if (allProducts.length > 0) {
        pickRandom(allProducts);
      }
    });
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!current) return;

    if (answer.trim().toLowerCase() === current.category.toLowerCase()) {
      setScore((s) => s + 1);
      setFeedback("correct");
    } else {
      setLives((l) => l - 1);
      setFeedback("wrong");
    }

    setTimeout(() => {
      setFeedback("");
      pickRandom(products);
    }, 2000);

    setAnswer("");
  };

  if (lives <= 0) {
    return (
      <section className="page">
        <h2>Juego terminado</h2>
        <p>Puntuación final: {score}</p>
        <button className="btn-primary" onClick={() => window.location.reload()}>
          Jugar de nuevo
        </button>
      </section>
    );
  }

  return (
    <section className="page">
      <h2>Mini‑juego de categorías</h2>

      <p>Puntuación: {score}</p>
      <p>Vidas: {lives}</p>

      {current && (
        <>
          <h3 className="game-current">{current.name}</h3>

          <form onSubmit={handleSubmit} className="game-form">
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Escribe la categoría..."
            />
            <button className="btn-primary">Comprobar</button>
          </form>

          {feedback === "correct" && (
            <p className="game-feedback correct">¡Correcto!</p>
          )}

          {feedback === "wrong" && (
            <p className="game-feedback wrong">
              Incorrecto — era {current.category}
            </p>
          )}
        </>
      )}
    </section>
  );
}