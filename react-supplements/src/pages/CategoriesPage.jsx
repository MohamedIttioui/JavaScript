export default function CategoriesPage() {
  const categories = [
    "Proteínas",
    "Creatinas",
    "Vitaminas",
    "Aminoácidos",
  ];

  return (
    <section className="page">
      <h2>Categorías</h2>
      <ul className="category-list">
        {categories.map((c) => (
          <li key={c} className="category-item">
            {c}
          </li>
        ))}
      </ul>
    </section>
  );
}