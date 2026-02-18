import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="page home-page">
      <div className="hero">
        <h1>Suplementos deportivos 013</h1>
        <p>Explora nuestra selección de proteínas, creatinas, vitaminas y más.</p>
        <Link to="/products" className="btn-primary">
          Ver productos
        </Link>
      </div>
    </section>
  );
}