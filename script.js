//setTimeout(funcion, tiempo)
/* setTimeout(()=>{
    console.log('han pasado 3 seg.');
},3000); */

//setInterval(funcion, tiempo)
/* let segundos = 0;
const intervalo = setInterval(()=>{
segundos++;
console.log(segundos, 'segundos han pasado.');
},1000);

clearInterval(intervalo); */

const cuentaAtras = document.getElementById('cuenta-atras');
const tiempoTranscurrido = document.getElementById('tiempo-transcurrido');
const inicio = document.getElementById('inicio');
const anillo = document.getElementById('anillo');
const mensaje = document.getElementById('mensaje');
const areaJuego = document.getElementById('area-juego');

let cuentaAtrasValor = 0;
let tiempoTranscurridoValor = 0;
let cuentaAtrasInterval;
let tiempoTranscurridoInterval;

function inicioJuego() {
    if (inicio.disabled) return;

    inicio.disabled = true;
    mensaje.textContent = "";
    cuentaAtrasValor = 10;
    tiempoTranscurridoValor = 0;

    mostrarAnillo();

    cuentaAtras.textContent = `Tiempo restante: ${cuentaAtrasValor}`;
    cuentaAtrasInterval = setInterval(() => {
        cuentaAtrasValor--;
        cuentaAtras.textContent = `Tiempo restante: ${cuentaAtrasValor}`;
        if (cuentaAtrasValor <= 0) {
            finJuego(false);
        }
    }, 1000);

    tiempoTranscurrido.textContent = `Tiempo transcurrido: ${tiempoTranscurridoValor}`;
    tiempoTranscurridoInterval = setInterval(() => {
        tiempoTranscurridoValor++;
        tiempoTranscurrido.textContent = `Tiempo transcurrido: ${tiempoTranscurridoValor}`;
    }, 1000);

    anillo.addEventListener('click', mrescataAnillo);
    anillo.style.display = "block";
}

function mostrarAnillo() {
    const maxX = areaJuego.clientWidth - anillo.offsetWidth;
    const maxY = areaJuego.clientHeight - anillo.offsetHeight;
    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));
    anillo.style.left = randomX + "px";
    anillo.style.top = randomY + "px";
}

function finJuego(esGanador) {
    clearInterval(cuentaAtrasInterval);
    clearInterval(tiempoTranscurridoInterval);

    anillo.style.display = "none";
    inicio.disabled = false;

    anillo.removeEventListener('click', mrescataAnillo);

    if (esGanador) {
        mensaje.textContent = `Felicidades, has ganado en ${tiempoTranscurridoValor} segundos`;
    } else {
        mensaje.textContent = `Has perdido. Tiempo transcurrido: ${tiempoTranscurridoValor} segundos`;
    }
}

function mrescataAnillo() {
    finJuego(true);
}

inicio.addEventListener('click', inicioJuego);