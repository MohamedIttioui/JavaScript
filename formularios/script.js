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

function esEmailValido(input) {
  //google -> js email regex
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase()); //true o false
  if (re.test(String(input.value.trim()).toLowerCase())) {
    mostrarCorrecto(input);
  } else {
    mostrarError(input, `El email no es válido.`)
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

/* function comprobarLongitud(input, min, max){
  if(input.value.length < min){
    mostrarError(input, `debe tener al menos ${min} caracteres.`)
  }else if(input.value.length > max){
    mostrarError(input, `debe tener ${max} caracteres.`);
  }else{
    mostrarCorrecto(input);
  }
} */

function comprobarContraseñasIguales(input1, input2) {
  if (input1.value !== input2.value) {
    mostrarError(input2, `las contraseñas no son iguales.`)
  }
}

//funcion para controlar el form
function formularioEsValido() {
  const controles = document.querySelectorAll('.form-control');
  for (let control of controles) {
    if (!control.classList.contains('correcto')) {
      return false;
    }
  }
  return true;
}

//Eventos
form.addEventListener('submit', (e) => {
  e.preventDefault();

  esObligatorio([nomUsuario, email, password, password2]);
  comprobarLongitudObjeto([nomUsuario, password], 5, 15);
  comprobarContraseñasIguales(password, password2);
  esEmailValido(email);

  if (formularioEsValido()) {
    const datos = {
      nombre: nomUsuario.value,
      email: email.value,
      password: password.value
    };
    localStorage.setItem('usuarioDAWEC', JSON.stringify(datos));

    console.log('Formulario enviado correctamente');
    console.log('Datos guardados:', datos);

    contenidorPopup.style.display = 'none';
    form.reset();
  } else {
    console.log('El formulario tiene errores. No se ha enviado.');
  }
});