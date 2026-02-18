import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.product_id} product={p} />
      ))}
    </div>
  );
}