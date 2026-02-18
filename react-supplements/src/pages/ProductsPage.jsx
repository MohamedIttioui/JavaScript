import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductList from "../components/products/ProductList";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.products || []);
      })
      .catch(() => {
        setError("No se pudieron cargar los productos.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p className="error">{error}</p>;

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <section className="page">
      <h2>Productos</h2>

      <ProductList products={visibleProducts} />

      {visibleCount < products.length && (
        <button
          className="btn-primary"
          onClick={() => setVisibleCount((prev) => prev + 4)}
          style={{ marginTop: "20px" }}
        >
          Ver más
        </button>
      )}
    </section>
  );
}