
import Modal from '../components/Modal';
import Titulo from '../components/Titulo';
import './App.css'

//HOOKS 
//Multiples componentes
//Props
//Children Props
// Funciones como props

import { useState } from 'react'

const App = () => {

  const [eventos, setEventos] = useState(
    [
      { titulo: 'examen dawec', id: 1 },
      { titulo: 'Concurso programame', id: 2 },
      { titulo: 'puente de la constitución', id: 3 },

    ]
  );

  const [mostrarEventos, setMostrarEventos] = useState(false);
  const subTitulo = "Todos los eventos Desarrollo de Apps Web";
  const [muestraModal, setMuestraModal] = useState(false);

  const handelClick = (id) => {
    /*     setEventos(eventos.filter((evento)=> {
          return id !== evento.id;
        }));
        console.log(id); */
    setEventos((eventosPrevios) => eventosPrevios.filter((eventos) => id !== eventos.id));
    console.log(id);
  }

  const handelCerrar = () => {
    setMuestraModal(false);
  }

  console.log(muestraModal);

  return (
    <div className='App'>
      <Titulo titulo="Eventos de DAW" subTitulo={subTitulo}></Titulo>
      <div>{!mostrarEventos &&
        <button onClick={() => setMostrarEventos(true)}>Mostrar Eventos</button>
      }
      </div>
      <div>{mostrarEventos &&
        <button onClick={() => setMostrarEventos(false)}>Ocultar Eventos</button>
      }
      </div>
      {
        mostrarEventos && eventos.map((evento, index) =>
          <div key={evento.id}>
            <h2>{index + 1} - {evento.titulo}</h2>
            <button onClick={() => handelClick(evento.id)}>Eliminar Evento</button>
          </div>
        )
      }
      {muestraModal && (
        <Modal handelCerrar={handelCerrar}>
          <h2>Stem Talks</h2>
          <p>Haz lo que quieras. pero no..</p>
          {/* <a href="http://google.com" target="_blank">Google</a> */}
        </Modal>
      )}
      {!muestraModal && (
        <button onClick={() => setMuestraModal(true)}>Mostrar Modal</button>
      )}
    </div>
  )
}

export default App
