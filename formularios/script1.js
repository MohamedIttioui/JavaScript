//Elementos del dom
const form = document.getElementById('form');
const nomUsuario = document.getElementById('nomUsuario');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Funciones
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

function esEmailValido(email) {
  //google -> js email regex
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()); //true o false
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


//Eventos
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validación del nombre de usuario
  if (nomUsuario.value === '') {
    mostrarError(nomUsuario, 'es obligatorio.');
  } else {
    mostrarCorrecto(nomUsuario);
  }

  // Validación del email
  if (email.value === '') {
    mostrarError(email, 'es obligatorio.');
  } else if (!esEmailValido(email.value)) {
    mostrarError(email, 'no es válido.');
  } else {
    mostrarCorrecto(email);
  }

  // Validación de la contraseña
  if (password.value === '') {
    mostrarError(password, 'es obligatoria.');
  } else {
    mostrarCorrecto(password);
  }

  // Validación de la confirmación de contraseña
  if (password2.value === '') {
    mostrarError(password2, 'es obligatoria.');
  } else if (password2.value !== password.value) {
    mostrarError(password2, 'no coincide con la contraseña.');
  } else {
    mostrarCorrecto(password2);
  }

  esObligatorio([nomUsuario, password, password2]);

});