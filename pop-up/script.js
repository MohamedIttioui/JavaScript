const button = document.querySelector('button');
const popup = document.querySelector('.popup');
const contenidorPopup = document.querySelector('.contenidor-popup');
const cierraPopup = document.querySelector('.cierra-popup');

button.addEventListener('click', (e) => {
  contenidorPopup.style.display = 'block';

});

cierraPopup.addEventListener('click', (e) => {
  contenidorPopup.style.display = 'none';

});

/* contenidorPopup.addEventListener('click', (e) => {
  contenidorPopup.style.display = 'none';

}); */

