// COMENTARIO DE UNA LINEA
/*
COMENTARIO
COMENTARIO
*/
// VARIABLES
// var, const y let

// let nombre = "Mohamed";
// let numero = 1;
// const PI = 3.141592; 
// let gano = true;

// console.log(nombre, typeof(nombre));
// console.log(numero, typeof(numero));
// console.log(PI, typeof(PI));
// console.log(gano, typeof(gano));

// Cadenas
/* let nombre = "Mohamed";
let apellido = "Ittioui";
let cuento = "Cuando despertó, el dinosaurio todavía estaba allí";
let tabulacion = "Hola \t Mohamed";
console.log(tabulacion);
let salto = "Hola\nMohamed";
console.log(salto);
let entreComillas = "Hoal \"amigo\" Pepe";
console.log(entreComillas); */

//Numeros
/* let edad = 20;
let precio = 14.55;
let ayudasArbitrarias = Infinity;
console.log( ayudasArbitrarias,typeof(ayudasArbitrarias));
let rojas = -Infinity;
console.log(rojas,typeof(rojas));
 */

//null: algo decidido pero vacio o con vacio null
/* let valor = null;
console.log(valor, typeof(valor));

let prueba;
console.log(prueba); */

// NaN:
/* let resultado = "hola" / 3;
console.log(resultado, typeof(resultado)); */

// Boolean
/* let messi = true;
let cr7 = false; */


// Valores falsy
// null, "", undefined, NaN

// Operadores: Aritmetricos -> operaciones mates
// suma(+), resta(-), multiplicacion(*), division(/), modulo(%)
/* let a = 10 ;
let b = 5;
let resultado = a / b;
console.log(resultado); */

// Unarios: -> incremento(a++ / ++a), decremento(a--/ --a)

/* console.log(a++);
console.log(++a); */

/*   Asignacion: -> 
suma y asigna: a += b; 
resta y asigna : a -= b; 
multi y asigna: a *= b; 
divi y asigna: a /= b;
modulo y asigna: a %= b;
*/

// cambio de signo -> -: a = -b;
/* 
let a = "5";
console.log(typeof(a)); */
//a = parseInt(a);
/* a = +a;
console.log(typeof(a)); */

/* let b = "4.55";
console.log(typeof(b)); */
//b = parseFloat(b);
/* b = +b;
console.log(typeof(b)); */

//Comparacion: >, >, >=, <=, ==, !=, ===valor y tipo, !==
/* let a = "5";
let b = 5;
console.log(a === b); */

// Boolean: AND &&, OR ||, NOT !,

/* let a = 5;
let b = 10;

let esMayor = a>b;
let esMenor = a<b;
console.log(esMayor, esMenor); */

// Trabajando con cadenas

/* let nombre = "Mohamed";
let apellido = "Ittioui";

let nombreCompleto = nombre+' '+apellido;
console.log(nombreCompleto);

let inicialNombre = nombre[7];
console.log(inicialNombre);

console.log(nombre.length); */

// Metodos para trabajar con cadenas
/* let nombreMayuscula = nombre.toUpperCase();
console.log(nombreMayuscula);
let nombreMinuscula = nombre.toLowerCase();
console.log(nombreMinuscula); */

// IndexOf()

/* let email = "mohamed@gmAil.com";
let indice = email.toLowerCase().indexOf('@');
console.log(indice);

let ultimaA = email.toLowerCase().lastIndexOf('a');
console.log(ultimaA); */

// slice()
/* let resultado = email.slice(0, 3);
console.log(resultado); */

// subString()
/* let resultado = email.substr(1, 3);
console.log(resultado);

resultado = email.substring(1, 3);
console.log(resultado); */

// replace()
/* let resultado = email.replace('a', 'X');
console.log(resultado); */

// Arrays: inicializacion
/* let numeros = [1,2,3,4,5,6];
console.log(numeros[2]);

let nombres = ["Mohamed", "Juan", "Miquel"];
console.log(nombres[0]); */

/* let numeros = new Array();
numeros[0] = 1;
numeros[1] = 2;
numeros[2] = 3;
numeros[3] = 4; */

/* console.log(numeros[3]);

let nombres = new Array('Mohamed', 'Enrique', 'Juan');
console.log(nombres[2]);

let numero = new Array(5);
numero[0] = 8;
numero[4] = 6;
numero[10] = 88;
console.log(numero[10]); */

// console.log(numeros.length);
/* numeros = Array(4).fill(0);
console.log(numeros[3]); */

// Metodos para arrays
//push()
/* const frutas = ['Manzana', 'Platano', 'Naranja'];
frutas.push(6);
console.log(frutas);
console.log(typeof(frutas[3]));
console.log(typeof(frutas)); */

//pop()
const frutas = ['Manzana', 'Platano', 'Naranja', 'Uva'];
/* let ultimoElemento = 'Naranja';
frutas.pop();
console.log(frutas); */

// shift()
/* let primerElemento = 'Manzana';
frutas.shift();
console.log(frutas); */

//unshift()
// frutas.unshift('uva', 'pera');

//slice()
//const copia = frutas.slice(1, 3)
//console.log(frutas);
//console.log(copia);

//concat
//const frutas2 = ['Fresa', 'Mango', 'Melocoton'];
//console.log(frutas);
//const frutasCombinadas = frutas.concat(frutas2);
//const frutasCombinadas = [...frutas, ...frutas2];
//console.log(frutasCombinadas);

//splice()

/* const frutas2 = ['Kiwi', 'Moras']
frutas.splice(1, 2, ...frutas2);
console.log(frutas); */

//join()
//console.log(frutas.join());

//sort() - UNICODE
/* console.log(frutas);
console.log(frutas.sort()); */

// const nuemros = [10, 3, 6, 2, 9, 1];
//numeros.sort();
/* console.log(nuemros.sort(function(a,b) {
return a -b;
})); */

// const ciudades = ['Zaragoza', 'madrid', 'Barcelona', "Ávila"];
//console.log(ciudades.sort());

/* console.log(nuemros .sort((a, b) => a - b)); */

/* ciudades.sort((a, b) => 
    a.toLowerCase() > b.toLowerCase() ? 1 : 
    a.toLowerCase() < b.toLowerCase() ? -1 : 0
); */
/* console.log(ciudades);

ciudades.sort((a, b) => a.localeCompare(b));
console.log(ciudades); */

// Estructuras de control:
//if - else if - else

/* let hora = 14;

if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
} */

//switch
/* let nombre = "aragon";
let edad = -Infinity;
switch(nombre){
    case "Gandalf":
        edad = 1230;
        break;
    case "aragon":
        edad = 532;
        break;
    case "frodo":
        edad = 34;
        break;
    case "sam":
        eadd = 36;
        break;
    default:
        edad = -1;
        break;
}

console.log("edad: " + edad); */

// operador ternario
/* let edad = 20;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); */

/* let hora = 19;
let mensaje1 = (hora < 12) ? "Buenos dias" : (hora < 18) ? "Buenas tardes" : "Buenas noches";
console.log(mensaje1); */

//Iteracción
//while
/* let contador = 7;
while(contador < 5){
    console.log(contador);
    contador++;
} */

//do-while
/* let contador = 7;

do{
    console.log(contador);
    contador++;
}while(contador < 5); */

// for
// break continue
/* for(let i = 0; i < 5; i++){
    if(i == 3){
        continue;
    }
    console.log(i);
} */

// Funciones
/* function saludar(){
    console.log("Hola mundo");
} */
//saludar();
/* function suma(a, b){
    let resultado = a + b;
    return resultado;
}

function muestraCalculo(){
    console.log(suma(3, 7));
}
muestraCalculo(); */

// objetos {} clave - valor
/* let cliente = {
    nombre: "Mohamed Ittioui",
    "Dirección del cliente": "c/ Desconocida",
    "-+-+-+-+": "loquepasa",
    pago: {
        tipo: "Visa",
        tarjeta: "123456789",
        "Fecha de caducidad": "12/12/2012"
    }

}; */
// cliente.nombre = "Juan";
// cliente["Dirección del cliente"] = "algo";
//console.log(cliente);
// console.log(cliente["Dirección del cliente"]);
// console.log(cliente.nombre);
// console.log(cliente["pago"].tarjeta);

// JSON
// number, string, boolean, array, Object, function

//metodos como datos

/* let estudiante = {
    id: 2,
    nombre: "Mohamed",
    diHola: function(){
        return "Hola";
    }
};
estudiante.edad = 25;
estudiante.diAdios = function(){
    return "Adios";
} */
// console.log(estudiante);
// console.log(estudiante, estudiante.diHola());
// let saludo = estudiante.diHola();
// console.log(estudiante, saludo);

//this
/* let factura = {
    descripcion: "Factura de prueba",
    precio: 89.99,
    iva: 21.00,
    subTotal: function(){
        return this.precio + (this.precio * this.iva) / 100;
    }
}; */
// console.log(factura, factura.subTotal());

// constructores
/* function Web(url, nombre){
    this.url = url;
    this.nombre = nombre;
    this.muestraInfo = function(){
        return this.url + ": " + this.nombre;
    }
} */

// let unWeb = new Web();
// console.log(unWeb.url);

// let otraWeb = new Web();
// otraWeb.url = "http://google.es";
// console.log(otraWeb.url, otraWeb.muestraInfo());

Web.prototype.visitas = 2;
Web.prototype.saluda = function(){
    return "Hola";
}
let unaWeb = new Web("http://facebook.com", "Facebook");
console.log(unaWeb);

//prototype
