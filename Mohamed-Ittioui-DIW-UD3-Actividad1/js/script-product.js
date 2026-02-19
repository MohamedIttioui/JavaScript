document.addEventListener('DOMContentLoaded', () => {
    /*GALERÍA DE IMÁGENES*/
    const mainImage = document.querySelector('.main-image');
    const smallImages = document.querySelectorAll('.small-images img');

    if (mainImage && smallImages.length > 0) {
        smallImages.forEach(img => {
            img.addEventListener('click', () => {
                mainImage.src = img.src;
                smallImages.forEach(t => t.classList.remove('active'));
                img.classList.add('active');
            });
        });
    }

    /*SELECTOR DE FORMATO (500g / 1kg / 2kg)
       Actualiza precio dinámicamente*/
    const formatButtons = document.querySelectorAll('.format-btn');
    const price = document.querySelector('#product-price');

    if (formatButtons.length > 0 && price) {
        formatButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Quitar la clase activa de todos
                formatButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                price.style.opacity = '0';
                setTimeout(() => {
                    price.textContent = `€${btn.dataset.price}`;
                    price.style.opacity = '1';
                }, 200);
            });
        });
    }

    /* SELECTOR DE SABOR (select)
       (Podría usarse en el futuro para modificar stock o imagen)
    */
    const saborSelect = document.getElementById('sabor');
    if (saborSelect) {
        saborSelect.addEventListener('change', () => {
            console.log(`Sabor seleccionado: ${saborSelect.value}`);
        });
    }
});
