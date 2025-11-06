// Elementos del DOM
const form = document.getElementById('form');
const nomUsuario = document.getElementById('nomUsuario');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const cerrarPopup = document.querySelector('.cierra-popup');

cerrarPopup.addEventListener('click', () => {
  document.getElementById('contenedor-popup').style.display = 'none';
});

// Mostrar error
function mostrarError(input, mensaje) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const label = formControl.querySelector('label');
  const small = formControl.querySelector('small');
  small.innerText = `${label.innerText} ${mensaje}`;
}

// Mostrar correcto
function mostrarCorrecto(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control correcto';
}

// Validar email
function esEmailValido(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim().toLowerCase())) {
    mostrarCorrecto(input);
  } else {
    mostrarError(input, 'no es válido.');
  }
}

// Validar campos obligatorios
function esObligatorio(inputs) {
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      mostrarError(input, 'es obligatorio');
    } else {
      mostrarCorrecto(input);
    }
  });
}

// Validar longitud
function comprobarLongitud(inputs, min, max) {
  inputs.forEach(input => {
    if (input.value.length < min) {
      mostrarError(input, `debe tener al menos ${min} caracteres.`);
    } else if (input.value.length > max) {
      mostrarError(input, `debe tener como máximo ${max} caracteres.`);
    } else {
      mostrarCorrecto(input);
    }
  });
}

// Validar contraseñas iguales
function comprobarContraseñasIguales(input1, input2) {
  if (input1.value !== input2.value) {
    mostrarError(input2, 'las contraseñas no coinciden.');
  } else {
    mostrarCorrecto(input2);
  }
}

// Verificar si el formulario es válido
function formularioEsValido() {
  const controles = document.querySelectorAll('.form-control');
  for (let control of controles) {
    if (!control.classList.contains('correcto')) {
      return false;
    }
  }
  return true;
}

// Evento submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  esObligatorio([nomUsuario, email, password, password2]);
  comprobarLongitud([nomUsuario, password], 4, 15);
  comprobarContraseñasIguales(password, password2);
  esEmailValido(email);

  if (formularioEsValido()) {
    const datos = {
      nombre: nomUsuario.value,
      email: email.value,
      password: password.value
    };
    localStorage.setItem('jugador', JSON.stringify(datos));
    console.log('Formulario enviado correctamente');
    console.log('Datos guardados:', datos);
    form.reset();
    document.querySelectorAll('.form-control').forEach((control) => {
      control.className = 'form-control';
    });
  } else {
    console.log('El formulario tiene errores. No se ha enviado.');
  }
});