const productList = document.getElementById('product-list');

//simulación de un servidor con un tiempo de espera.
function fetchProductSync() {
  const start = Date.now();

  while (Date.now() - start < 10000) {
    console.log('Cargando');
  };
  return [
    { id: 1, name: 'Pelota de futbol', price: 20 },
    { id: 2, name: 'Pelota de tenis', price: 50 }
  ]
}

//mostrar productos sin sincronía
function displayProducts() {
  const products = document.getElementById('products');
  products.innerHTML = "<p>Carcando peroductos...</p>";

  //Llamada bloqueante.
  const productsFunction = fetchProductSync();

  products.innerHTML = productsFunction.map((p) => {
    `<p>${p.name} - ${p.price}€</p>`
  }).join("");
}

document.getElementById('add-product-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log("No se pueden añadir productos mientras se cargan los existentes.");

});

displayProducts();