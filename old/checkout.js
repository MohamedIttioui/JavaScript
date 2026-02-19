// ENDPOINT PHP para renderizar el checkout
const RENDER_CHECKOUT_ENDPOINT = '/student013/shop/backend/resources/render_checkout_content.php';
const checkoutContainer = document.getElementById('checkout-dynamic-content');

function loadCheckoutContent() {
  if (!checkoutContainer) {
    console.error("Contenedor #checkout-dynamic-content no encontrado.");
    return;
  }

  fetch(RENDER_CHECKOUT_ENDPOINT)
    .then(response => {
      if (!response.ok) {
        if (response.status === 401 || response.status === 404) {
          checkoutContainer.innerHTML = '<div class="alert alert-error">Error al cargar el checkout. Por favor, asegúrate de estar logueado y de tener un pedido reciente.</div>';
        }
        throw new Error("Error HTTP: " + response.status);
      }
      return response.text();
    })
    .then(html => {
      if (html) {
        checkoutContainer.innerHTML = html;
        // Aquí podrías inicializar listeners de eventos si fueran necesarios
        // Por ejemplo, form-checkout.addEventListener('submit', ...);
      }
    })
    .catch(error => {
      console.error('Error al cargar el checkout:', error);
      // Mostrar un mensaje genérico de error al usuario
      checkoutContainer.innerHTML = '<div class="alert alert-error">No se pudo cargar el checkout. Inténtalo de nuevo.</div>';
    });
}

document.addEventListener('DOMContentLoaded', loadCheckoutContent);