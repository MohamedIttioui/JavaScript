
const palabras = ["GUAYABA", "MANZANA", "PERA", "PROGRAMACION", "OBJETOS", "CLASES"];
const palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];

//ELEMENTOS DEL DOM
const contenedor = document.querySelector(".contenedor");
const palabraOculta = document.querySelector(".palabra-oculta");
const letras = document.querySelectorAll(".abecedario");
const contadorIntentos = document.getElementById("contador-intentos");
const contadorErrores = document.getElementById("contador-errores");
const cronometro = document.getElementById("cronometro");
const primerParrafo = document.getElementsByClassName("texto")[0];

let intentos = 7;
let errores = 0;
let aciertos = 0;
let tiempo = 0;
let temporizador;
let juegoActivo = true;

//FUNCIÓN: Generar guiones según la palabra
function generarGuiones() {
  palabraOculta.innerHTML = "";
  for (let i = 0; i < palabraSecreta.length; i++) {
    const span = document.createElement("span");
    span.classList.add("letra");
    span.textContent = "_";
    palabraOculta.appendChild(span);
  }
}
generarGuiones();
const letrasOcultas = document.querySelectorAll(".letra");

//FUNCIÓN: Iniciar cronómetro
function iniciarTemporizador() {
  temporizador = setInterval(() => {
    tiempo++;
    const minutos = String(Math.floor(tiempo / 60)).padStart(2, "0");
    const segundos = String(tiempo % 60).padStart(2, "0");
    cronometro.textContent = `${minutos}:${segundos}`;
  }, 1000);
}
iniciarTemporizador();

//FUNCIÓN: Bloquear el teclado cuando termine
function bloquearTeclado() {
  letras.forEach(letra => {
    letra.style.pointerEvents = "none";
    letra.style.opacity = "0.5";
    letra.style.cursor = "default";
  });
}

//FUNCIÓN: Verificar si el jugador ha ganado
function verificarVictoria() {
  if (aciertos === palabraSecreta.length) {
    juegoActivo = false;
    bloquearTeclado();
    const mensaje = document.createElement("span")
    mensaje.textContent = "¡Has ganado!";
    mensaje.classList.add('hasGanado');
    const contenedor = primerParrafo.parentNode;
    contenedor.insertBefore(mensaje, primerParrafo);
    clearInterval(temporizador);
  }
}

//FUNCIÓN: Verificar si el jugador ha perdido
function verificarDerrota() {
  if (intentos === 0) {
    juegoActivo = false;
    bloquearTeclado();
    palabraSecreta.split("").forEach((char, index) => {
      letrasOcultas[index].textContent = char;
    });
    const mensaje = document.createElement("span")
    mensaje.textContent = "¡Has perdido!";
    mensaje.classList.add('hasPerdido');
    const contenedor = primerParrafo.parentNode;
    contenedor.insertBefore(mensaje, primerParrafo);
    clearInterval(temporizador);
  }
}

//EVENTO: Clic en cada letra
letras.forEach((letra) => {
  letra.addEventListener("click", () => {
    if (!juegoActivo) return;

    const letraSeleccionada = letra.textContent;
    letra.style.pointerEvents = "none";

    if (palabraSecreta.includes(letraSeleccionada)) {
      letra.style.backgroundColor = "#14950d";

      //Mostrar todas las coincidencias de la letra
      let coincidencias = 0;
      palabraSecreta.split("").forEach((char, index) => {
        if (char === letraSeleccionada) {
          letrasOcultas[index].textContent = char;
          coincidencias++;
        }
      });
      aciertos += coincidencias;

    } else {
      letra.style.backgroundColor = "#950d0d";
      errores++;
      intentos--;
      contadorErrores.textContent = errores;
      contadorIntentos.textContent = intentos;
    }

    verificarVictoria();
    verificarDerrota();
  });
});