import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
      </div>

      <div className="product-card-info">
        <h3>{product.name}</h3>
        <p className="product-card-price">{product.price} €</p>

        {product.format && (
          <p className="product-card-format">Formato: {product.format}</p>
        )}

        <Link to={`/products/${product.product_id}`} className="btn-primary">
          Ver
        </Link>
      </div>
    </article>
  );
}