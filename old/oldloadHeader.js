// Cargar componentes HTML (header / footer)
function loadComponent(endpointUrl, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error("No encontré el contenedor:", containerId);
    return;
  }

  fetch(endpointUrl)
    .then(response => {
      if (!response.ok) {
        container.innerHTML = '<p style="color:red;">Error al cargar el componente.</p>';
        return null; // corto el flujo
      }
      return response.text();
    })
    .then(html => {
      if (!html) return;
      container.innerHTML = html;

      // Aviso cuando el header termina de cargarse
      if (containerId === "dynamic-header-container") {
        document.dispatchEvent(new Event("headerLoaded"));
      }
    });
}

function searchProducts(searchItem) {
  const container = document.getElementById("products-container");
  const trimmed = searchItem.trim();

  // Si el usuario borra el campo, limpio los resultados
  if (trimmed.length === 0) {
    if (container) container.innerHTML = "";
    return;
  }

  // Llamo al backend pasándole el término de búsqueda
  const url = `/student013/shop/backend/resources/products_search.php?product_id=${encodeURIComponent(trimmed)}`;

  fetch(url)
    .then(response => {
      // Si el servidor devuelve error, muestro mensaje
      if (!response.ok) {
        if (container) {
          container.innerHTML = `<p class="error-message">Error ${response.status}</p>`;
        }
        return null;
      }
      // El backend devuelve HTML, por eso uso text()
      return response.text();
    })
    .then(html => {
      if (!html) return;
      if (container) container.innerHTML = html;
    });
}

// Generar el menú de categorías y submenús
function renderCategories(categories) {
  const container = document.querySelector('.category-links');
  if (!container) return;

  container.innerHTML = "";

  // Recorro todas las categorías recibidas del backend
  categories.forEach(category => {
    const listItem = document.createElement('li');
    listItem.classList.add('category-item');

    const mainLink = document.createElement('a');
    mainLink.href = `/views/products.html?category_id=${category.category_id}`;
    mainLink.textContent = category.name;

    listItem.appendChild(mainLink);

    if (category.submenus && category.submenus.length > 0) {
      const submenuDiv = document.createElement('div');
      submenuDiv.classList.add('submenu');

      category.submenus.forEach(submenu => {
        const subLink = document.createElement('a');
        subLink.href = `/views/product-detalle.html?product_id=${submenu.product_id}`;
        subLink.textContent = submenu.name;
        submenuDiv.appendChild(subLink);
      });
      listItem.appendChild(submenuDiv);
    }
    container.appendChild(listItem);
  });
}

// Cargar categorías desde el backend
function loadCategories() {
  fetch('/student013/shop/backend/resources/get_categories.php')
    .then(response => {
      // Si el servidor responde con error HTTP, lo detengo
      if (!response.ok) {
        console.log("Error HTTP al cargar categorías:", response.status);
        return null;
      }
      // El backend devuelve JSON, por eso uso json()
      return response.json();
    })
    .then(data => {
      if (!data) return;
      // El backend también puede mandar un error interno
      if (!data.success) {
        console.log("Error del backend al cargar categorías:", data.message);
        return;
      }
      // Si todo va bien, dibujo las categorías en pantalla
      renderCategories(data.categories);
    });
}

// Inicialización cuando carga la página
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("/student013/shop/backend/header.php", "dynamic-header-container");
  loadComponent("/student013/shop/backend/footer.php", "dynamic-footer-container");
  loadCategories();
});