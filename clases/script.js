class Persona{
    //Constructor
    constructor(nombre){
        this.nombre = nombre;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const ego = new Persona("Mohamed");
ego.saludar();

// herencia - extends
class Empleado extends Persona {
    constructor(nombre, salario) {
        super(nombre);
        this.salario = salario;
    }
    trabajar() {
        console.log(`Hola soy ${this.nombre} está trabajando y gana ${this.salario}`);
    }
}

const maria = new Empleado("Maria", 2000);
maria.saludar();
maria.trabajar();