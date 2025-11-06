//Seleccionar elementos del DOM
const contenedor = document.querySelector('.contenedor');
const asientos = document.querySelectorAll('.fila .asiento:not(.ocupado)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');
const finalizar = document.getElementById('finalizar');
let precioDelTicket = +peliculaSelect.value;


llenaUI(); //se llama al inicio para cargar datos guardados

//Funciones
function actualizaSeleccionAsientos() {
  const asientosSeleccionados = document.querySelectorAll('.fila .asiento.seleccionado');

  //console.log(asientosSeleccionados);
  //haremos 3 cosa
  //- Copiar los asientos seleccionados en un array
  //- Mapear los datos a lo largo del arrary
  //- Devolver unos nuevos indices del array

  /*   const asientosIndex = [...asientosSeleccionados];
    console.log(asientosIndex); */

  /*   const array = [1, 2, 3];
    const array2 = array.map((item)=> {
      return item * 2;
    });
    console.log(array2); */

  const asientosIndex = [...asientosSeleccionados].map((asiento) => {
    return [...asientos].indexOf(asiento);
  });
  console.log(asientosIndex);

  localStorage.setItem('asientosSeleccionados', JSON.stringify(asientosIndex));

  const contadorAsientosSeleccionados = asientosSeleccionados.length;
  contador.innerText = contadorAsientosSeleccionados;
  total.innerText = contadorAsientosSeleccionados * precioDelTicket;
}

function guardaInfoPelicula(indicePelicula, precioPelicula) {
  localStorage.setItem('indicePeliculaSeleccionado', indicePelicula);
  localStorage.setItem('precioPeliculaSeleccionado', precioPelicula);
}

function llenaUI() {
  const asientosSeleccionados = JSON.parse(localStorage.getItem('asientosSeleccionados'));
  const asientosOcupados = JSON.parse(localStorage.getItem('asientosOcupados'));

  if (asientosSeleccionados != null && asientosSeleccionados.length > 0) {
    asientos.forEach((asiento, index) => {
      if (asientosSeleccionados.indexOf(index) > -1) {
        asiento.classList.add('seleccionado');
      }
    });
  }

  //marcar asientos ocupados al cargar
  if (asientosOcupados !== null) {
    asientos.forEach((asiento, index) => {
      if (asientosOcupados.indexOf(index) > -1) {
        asiento.classList.add('ocupado');
        asiento.classList.remove('seleccionado');
      }
    });
  }

  // recuperar película seleccionada
  const indicePeliculaSeleccionado = localStorage.getItem('indicePeliculaSeleccionado');
  if (indicePeliculaSeleccionado !== null) {
    peliculaSelect.selectedIndex = indicePeliculaSeleccionado;
    precioDelTicket = +peliculaSelect.value;
  }

  // actualizar contador y total al cargar
  actualizaSeleccionAsientos();
}

//EVENTOS
//Evento para la seleccion de asientos
contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('asiento') &&
    !e.target.classList.contains('ocupado')) {

    e.target.classList.toggle('seleccionado')
    actualizaSeleccionAsientos();

    console.log(e.target);
  }
});

//Evento para la seleccion de peliculas
peliculaSelect.addEventListener('change', (e) => {
  precioDelTicket = +e.target.value;

  // console.log(e.target.selectedIndex, e.target.value);
  guardaInfoPelicula(e.target.selectedIndex, e.target.value);

  actualizaSeleccionAsientos();
});

//Evento para finalizar reserva
finalizar.addEventListener('click', () => {
  const asientosSeleccionados = document.querySelectorAll('.fila .asiento.seleccionado');
  const ocupadosGuardados = JSON.parse(localStorage.getItem('asientosOcupados'));

  const nuevosOcupados = [...asientosSeleccionados].map((asiento) => {
    return [...asientos].indexOf(asiento);
  });

  const todosOcupados = [...new Set([...ocupadosGuardados, ...nuevosOcupados])];

  // Guardar en localStorage
  localStorage.setItem('asientosOcupados', JSON.stringify(todosOcupados));
  localStorage.removeItem('asientosSeleccionados');

  asientosSeleccionados.forEach((asiento) => {
    asiento.classList.remove('seleccionado');
    asiento.classList.add('ocupado');
  });
  actualizaSeleccionAsientos();
});
