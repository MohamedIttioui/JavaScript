import { Link, NavLink, useNavigate } from "react-router-dom";
import { isLoggedIn, logout, getUser } from "../../services/auth";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="app-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          013 Online Shop
        </Link>

        <nav className="nav">
          <NavLink to="/products">Productos</NavLink>
          <NavLink to="/categories">Categorías</NavLink>
          <NavLink to="/game">Mini‑juego: Adivina</NavLink>
          <NavLink to="/game-price">Mini‑juego: Precio</NavLink>

          {isLoggedIn() ? (
            <>
              <span className="user-tag">Hola, {getUser()}</span>
              <button className="btn-logout" onClick={handleLogout}>
                Salir
              </button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}