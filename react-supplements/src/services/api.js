const API_BASE_URL = "http://localhost/student013/shop/backend";

async function handleResponse(res) {
  if (!res.ok) throw new Error("Error en la respuesta");
  return res.json();
}

export async function getProducts() {
  const res = await fetch(`${API_BASE_URL}/resources/get_products.php`);
  return handleResponse(res);
}

export async function getProductById(id) {
  const res = await fetch(
    `${API_BASE_URL}/resources/get_product.php?id=${encodeURIComponent(id)}`
  );
  return handleResponse(res);
}

export async function getCategories() {
  const res = await fetch(`${API_BASE_URL}/resources/get_categories.php`);
  return handleResponse(res);
}