const nombres = ["Luke", "Obi-Wan", "Yoda", "Leia"];
const edades = [19, 57, 900, 19];

// Creamos un objeto vacío
const personajes = {};

// Usamos un bucle para combinar los arrays
for (let i = 0; i < nombres.length; i++) {
    personajes[nombres[i]] = edades[i];
}

// Mostramos el objeto en la consola
console.log("Personajes y edades:");
console.log(personajes);

// Calculamos la suma de las edades
let sumaEdades = 0;
for (let i = 0; i < edades.length; i++) {
    sumaEdades += edades[i];
}

// Mostramos la suma
console.log("Suma total de edades:", sumaEdades);