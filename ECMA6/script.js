//desestructuración: EXTRACCIÓN DE VALORES
//EXTRAER VALORES DE ARRAYS Y OBJETOS

// Array

// const numeros = [1, 2, 3, 4];
// const [a, b, c, d] = numeros;
// console.log(a, b, c, d);

// Object

// const persona = {
//     nombre: "Mohamed",
//     id: 1
// };
// const { nombre, id } = persona;
// console.log(nombre, id);

// Atajo para la asignación de propiedades a un objeto.
// const nombre = "Mohamed";
// const id = 1;

// const persona ={
//     nombre,
//     id
// };
// console.log(persona.nombre, persona.id);

//Template Strings (plantillas de cadenas)
//operdador de interpolación ${}
// const nombre = "Mohamed";
// const edad = 25;

// const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
// console.log(mensaje);

//operador Spread o operador de propagación -> expandir un array en multiples elementos
// const array = [1, 2, 3];
// const newArray = [0, ...array, 4, 5];
// console.log(newArray);

// Parámetros por defecto
// function saludar(nombre = "Invitado"){
//     console.log(`Hola ${nombre}`);
// }
// saludar();

// Parámetros rest
//capturar un número variable de argumentos
//pasaremos varios parámetros en uno solo
/* function sumar(...numeros) {
    let resultado = 0;
    for (let numero of numeros) {
        resultado += numero;
    }

    return resultado;
}
console.log(sumar(4, 6, 3, 9)); */

/* const sumar = (...numeros) => {
    let resultado = 0;
    for (let numero of numeros) {
        resultado += numero;
    }
    return resultado;
};
console.log(sumar(4, 6, 3, 9)); */

//Arrow function
/* function sumar(a, b) {
    return a + b;
}

const sumar2 = (a, b) => a + b;

console.log(sumar2(8,6)); */

// Métodos de arrays
//forEach()
// const numeros = [1, 2, 3, 4, 5, 6];
/* numeros.forEach(
    (numero) => {
        let resultado = 0;
        resultado = numero * 2;
        console.log(numero);
    }
); */

// map()
/* const dobleNumero = numeros.map(
    (numero) => {
        return numero * 2;
    }
);
console.log(dobleNumero); */

// filter()
// const numerosPares = numeros.filter(
//     (numero) => {
//         return numero % 2 === 0;
//     }
// );
/* const numerosMayores = numeros.filter((numero) => numero > 3);
console.log(numerosMayores); */

//reduce()
/* const suma = numeros.reduce(
    (acumulador, numero) => {
        return acumulador + numero;
    }
);
console.log(suma); */

//find()
/* let numeroEncontrado = numeros.find(
    (numero) => {

        return ((numero % 2 === 0) && numero > 4);
    }
);
console.log(numeroEncontrado); */

//findIndex()
/* const indiceEncontrado = numeros.findIndex(
    (numero) => {
        return numero > 3;
    }
);
console.log(indiceEncontrado); */

/* const indiceEncontrado = numeros.findLastIndex(
    (numero) => {
        return numero > 3;
    }
);
console.log(indiceEncontrado); */

//some()

/* const tieneNumeroPar = numeros.some(
    (numero) => {
        return numero < 1;
    }
);
console.log(tieneNumeroPar); */

//every()
const numeros = [1, 2, 3, 4, 5, 6];

const nuemrosPares = nuemros.every(
    (numero) => {
        return (numero % 2 === 0);
    }
);
console.log(nuemrosPares);