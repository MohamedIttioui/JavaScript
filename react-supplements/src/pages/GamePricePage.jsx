import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/api";
import { isLoggedIn } from "../services/auth";

export default function GamePricePage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(null);
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

    getProducts().then((data) => {
      const list = data.products || [];
      setProducts(list);

      if (list.length > 0) {
        pickRandom(list);
      }
    });
  }, [navigate]);

  const getPriceCategory = (price) => {
    const p = parseFloat(price);

    if (p < 20) return "barato";
    if (p <= 40) return "medio";
    return "caro";
  };

  const handleGuess = (guess) => {
    const correct = getPriceCategory(current.price);

    if (guess === correct) {
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
      <h2>Mini‑juego: Adivina el precio</h2>

      <p>Puntuación: {score}</p>
      <p>Vidas: {lives}</p>

      {current && (
        <>
          <h3 className="game-current">{current.name}</h3>

          <div className="game-buttons">
            <button className="btn-primary" onClick={() => handleGuess("barato")}>
              Barato (&lt; 20€)
            </button>

            <button className="btn-primary" onClick={() => handleGuess("medio")}>
              Medio (20–40€)
            </button>

            <button className="btn-primary" onClick={() => handleGuess("caro")}>
              Caro (&gt; 40€)
            </button>
          </div>

          {feedback === "correct" && (
            <p className="game-feedback correct">¡Correcto!</p>
          )}

          {feedback === "wrong" && (
            <p className="game-feedback wrong">
              Incorrecto — era {getPriceCategory(current.price)}
            </p>
          )}
        </>
      )}
    </section>
  );
}