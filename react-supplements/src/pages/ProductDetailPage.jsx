import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";

export default function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        if (!data.product) {
          setError("Producto no encontrado.");
        } else {
          setProduct(data.product);
        }
      })
      .catch(() => setError("Error al cargar el producto."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!product) return null;

  return (
    <section className="page product-detail-page">
      <div className="product-detail">
        <div className="product-detail-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-image"
          />
        </div>

        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <p className="product-detail-price">{product.price} €</p>
          {product.format && (
            <p>
              <strong>Formato:</strong> {product.format}
            </p>
          )}
          {product.flavor && (
            <p>
              <strong>Sabor:</strong> {product.flavor}
            </p>
          )}
          {product.features && (
            <p>
              <strong>Características:</strong> {product.features}
            </p>
          )}
          {product.description && (
            <p className="product-detail-desc">{product.description}</p>
          )}
          <button className="btn-primary">Añadir al carrito</button>
        </div>
      </div>
    </section>
  );
}