// const parrafo = document.querySelector('body > div:nth-child(2) > p:nth-child(2)');
// console.log(parrafo);

// const h1 = document.querySelector('body > h1');
// console.log(h1);

// const parrafos = document.querySelectorAll('p');
// console.log(parrafos);
// console.log(parrafos[1]);

// parrafos.forEach(
//     (parrafo) => {
//         console.log(parrafo);
//     }
// );

// const errores = document.querySelectorAll('.error');
// console.log(error);

// const tituloPagina = document.getElementById('titulo-pagina');
// console.log(tituloPagina);

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[1]);

//tag
const parrafos = document.getElementsByTagName('p');
console.log(parrafos);
console.log(parrafos[1]);

for (let i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i]);
}