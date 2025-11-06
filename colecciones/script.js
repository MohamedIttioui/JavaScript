// Symbol - valores únicos e immutables -> identificadores en objetos
/* const id = Symbol("id");
const persona = {
    nombre: "Mohamed",
    [id]: 1
};
console.log(persona[id]); */

//iteradores son objetos que interpretan el protocolo de iteración en JavaScript
/* const numeros = [1, 2, 3];
const iterador = numeros[Symbol.iterator]();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); */

//set() - Almacenar valores únicos de cualquier tipo. 
// no permite duplicados
/* const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(4);

set.delete(3);

console.log(set);
console.log(set.size);
console.log(set.has(4)); */

//map -> Almacenar pares clave - valor
const mapa = new Map();

mapa.set("nombre", "Mohamed");
mapa.set("edad", 25);
console.log(mapa.has("edad"));
console.log(mapa.get("nombre"));
mapa.delete("edad");
console.log(mapa.has("edad"));
console.log(mapa);