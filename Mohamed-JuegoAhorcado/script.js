const urlPalabras = "http://localhost:3000/palabras";
const selectTema = document.getElementById("tema");
const palabraOculta = document.querySelector(".palabra-oculta");
const letras = document.querySelectorAll(".abecedario");
const contadorIntentos = document.getElementById("contador-intentos");
const contadorErrores = document.getElementById("contador-errores");
const cronometro = document.getElementById("cronometro");
const cuentaAtras = document.getElementById("cuenta-atras");
const primerParrafo = document.getElementsByClassName("texto")[0];

let palabrasPorTema = {};
let palabraSecreta = "";
let letrasOcultas = [];
let intentos = 7;
let errores = 0;
let aciertos = 0;
let tiempo = 0;
let juegoActivo = false;
let temporizador;
let cuentaAtrasTimer;
let cuentaAtrasValor = 10;

// Cargar temas desde JSON
async function cargarTemas() {
  const response = await fetch(urlPalabras);
  const datos = await response.json();
  datos.forEach((p) => {
    if (!palabrasPorTema[p.tema]) palabrasPorTema[p.tema] = [];
    palabrasPorTema[p.tema].push(p.palabra);
  });
  Object.keys(palabrasPorTema).forEach(tema => {
    const option = document.createElement("option");
    option.value = tema;
    option.textContent = tema;
    selectTema.appendChild(option);
  });
}
cargarTemas();

// Selección de tema
selectTema.addEventListener("change", () => {
  const tema = selectTema.value;
  if (tema) {
    palabraSecreta = palabrasPorTema[tema][Math.floor(Math.random() * palabrasPorTema[tema].length)];
    iniciarJuego();
  }
});

// Generar guiones
function generarGuiones() {
  palabraOculta.innerHTML = "";
  for (let i = 0; i < palabraSecreta.length; i++) {
    const span = document.createElement("span");
    span.classList.add("letra");
    span.textContent = "_";
    palabraOculta.appendChild(span);
  }
}

// Temporizador principal
function iniciarTemporizador() {
  temporizador = setInterval(() => {
    tiempo++;
    const min = String(Math.floor(tiempo / 60)).padStart(2, "0");
    const seg = String(tiempo % 60).padStart(2, "0");
    cronometro.textContent = `${min}:${seg}`;
  }, 1000);
}

// Cuenta atrás por letra
function iniciarCuentaAtras() {
  if (!juegoActivo) return; // ← Esta línea es clave

  cuentaAtrasValor = 10;
  cuentaAtras.textContent = cuentaAtrasValor;
  clearInterval(cuentaAtrasTimer);
  cuentaAtrasTimer = setInterval(() => {
    if (!juegoActivo) {
      clearInterval(cuentaAtrasTimer);
      return;
    }

    cuentaAtrasValor--;
    cuentaAtras.textContent = cuentaAtrasValor;

    if (cuentaAtrasValor <= 0) {
      errores++;
      intentos--;
      contadorErrores.textContent = errores;
      contadorIntentos.textContent = intentos;
      verificarDerrota();
      iniciarCuentaAtras(); // Solo si sigue activo
    }
  }, 1000);
}

// Bloquear teclado
function bloquearTeclado() {
  letras.forEach(letra => {
    letra.style.pointerEvents = "none";
    letra.style.opacity = "0.5";
    letra.style.cursor = "default";
  });
  clearInterval(cuentaAtrasTimer);
}

// Verificar victoria
function verificarVictoria() {
  if (aciertos === palabraSecreta.length) {
    juegoActivo = false;
    bloquearTeclado();
    const mensaje = document.createElement("span");
    mensaje.textContent = "¡Has ganado!";
    mensaje.classList.add("hasGanado");
    primerParrafo.parentNode.insertBefore(mensaje, primerParrafo);
    clearInterval(temporizador);
    clearInterval(cuentaAtrasTimer);
    guardarEstadistica();
  }
}

// Verificar derrota
function verificarDerrota() {
  if (intentos === 0) {
    juegoActivo = false;
    bloquearTeclado();
    palabraSecreta.split("").forEach((char, i) => letrasOcultas[i].textContent = char);
    const mensaje = document.createElement("span");
    const usuario = JSON.parse(localStorage.getItem("usuarioDAWEC"));
    if (usuario) {
      usuario.derrotas++;
      usuario.partidas.push({
        palabra: palabraSecreta,
        resultado: "derrota",
        errores,
        tiempo
      });
      localStorage.setItem("usuarioDAWEC", JSON.stringify(usuario));
      console.log("Estadística actualizada:", usuario);
    }
    mensaje.textContent = "¡Has perdido!";
    mensaje.classList.add("hasPerdido");
    primerParrafo.parentNode.insertBefore(mensaje, primerParrafo);
    clearInterval(temporizador);
    clearInterval(cuentaAtrasTimer);
  }
}

// Guardar estadísticas
function guardarEstadistica() {
  const usuario = JSON.parse(localStorage.getItem("Jugador"));
  if (!usuario) return;

  usuario.victorias++;
  usuario.partidas.push({
    palabra: palabraSecreta,
    resultado: "victoria",
    errores,
    tiempo
  });

  localStorage.setItem("Jugador", JSON.stringify(usuario));
  console.log("Estadística actualizada:", usuario);
}

// Iniciar juego
function iniciarJuego() {
  intentos = 7;
  errores = 0;
  aciertos = 0;
  tiempo = 0;
  juegoActivo = true;
  contadorErrores.textContent = errores;
  contadorIntentos.textContent = intentos;
  cronometro.textContent = "00:00";
  cuentaAtras.textContent = "--";
  document.querySelectorAll(".hasGanado, .hasPerdido").forEach(el => el.remove());

  letras.forEach((letra) => {
    letra.style.pointerEvents = "auto";
    letra.style.backgroundColor = "#444451";
    letra.style.opacity = "1";
    letra.style.cursor = "pointer";
  });

  generarGuiones();
  letrasOcultas = document.querySelectorAll(".letra");
  iniciarTemporizador();
  iniciarCuentaAtras();
}

// Evento de clic en letras
letras.forEach((letra) => {
  letra.addEventListener("click", () => {
    if (!juegoActivo) return;

    const letraSeleccionada = letra.textContent;
    letra.style.pointerEvents = "none";

    if (palabraSecreta.includes(letraSeleccionada)) {
      letra.style.backgroundColor = "#14950d";
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
    iniciarCuentaAtras();
  });
});