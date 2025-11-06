//Promesas , async / await
//Simular un servidor con asyncronía

function fetchProductsAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Pelota de futbol', price: 20 },
        { id: 2, name: 'Pelota de tenis', price: 50 }
      ])
    }, 3000); //Simular un retraso de 3 seg.
  });
}

//Mostrar productos con asyncronía
async function displayProducts() {
  const products = document.getElementById('products');
  products.innerHTML = "<p>Carcando productos...</p>";

  //Llamada no bloqueante.
  const productsFunction = await fetchProductsAsync();

  products.innerHTML = productsFunction.map((p) => {
    return `<p>${p.name} - ${p.price}€</p>`
  }).join("");

  document.getElementById('add-product-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;

    //Simular guardado en servidor
    await new Promise((resolve) => {
      setTimeout(() => {
        alert(`Producto añadido: ${name} - ${price}€`);
        document.getElementById('add-product-form').reset();
        displayProducts();
        resolve();
      }, 1000);
    });
  });
}

//Ejecutamos 
displayProducts();