// Elementos del DOM
const form = document.getElementById('form');
const nomUsuario = document.getElementById('nomUsuario');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const contenidorPopup = document.getElementById('contenedor-popup');
/* const cierraPopup = document.querySelector('.cierra-popup');

// Cerrar popup
cierraPopup.addEventListener('click', () => {
  contenidorPopup.style.display = 'none';
}); */

// Funciones de validación
function mostrarError(input, mensaje) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const label = formControl.querySelector('label');
  const small = formControl.querySelector('small');
  small.innerText = label.innerText + ' ' + mensaje;
}

function mostrarCorrecto(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control correcto';
}

function esEmailValido(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(input.value.trim()).toLowerCase())) {
    mostrarCorrecto(input);
  } else {
    mostrarError(input, `El email no es válido.`);
  }
}

function esObligatorio(inputArray) {
  inputArray.forEach((input) => {
    if (input.value.trim() === '') {
      mostrarError(input, 'es obligatorio');
    } else {
      mostrarCorrecto(input);
    }
  });
}

function comprobarLongitudObjeto(inputArray, min, max) {
  inputArray.forEach((input) => {
    if (input.value.length < min) {
      mostrarError(input, `debe tener al menos ${min} caracteres.`);
    } else if (input.value.length > max) {
      mostrarError(input, `debe tener ${max} caracteres como máximo.`);
    } else {
      mostrarCorrecto(input);
    }
  });
}

function comprobarContraseñasIguales(password, password2) {
  if (password.value !== password2.value) {
    mostrarError(password2, `las contraseñas no son iguales.`);
  }
}

function formularioEsValido() {
  const formControl = document.querySelectorAll('.form-control');
  for (let control of formControl) {
    if (!control.classList.contains('correcto')) {
      return false;
    }
  }
  return true;
}

// Evento de envío del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();

  esObligatorio([nomUsuario, email, password, password2]);
  comprobarLongitudObjeto([nomUsuario, password], 4, 15);
  comprobarContraseñasIguales(password, password2);
  esEmailValido(email);

  if (formularioEsValido()) {
    const datos = {
      nombre: nomUsuario.value,
      email: email.value,
      password: password.value,
      victorias: 0,
      derrotas: 0,
      partidas: [] // Aquí guardaremos cada palabra jugada
    };
    localStorage.setItem('Jugador', JSON.stringify(datos));

    contenidorPopup.style.display = 'none';
    form.reset();

    // Iniciar el juego solo si el usuario ha elegido un tema
    const temaSeleccionado = document.getElementById("tema").value;
    if (temaSeleccionado) {
      iniciarJuego();
    }
  } else {
    console.log('El formulario tiene errores.');
  }
});