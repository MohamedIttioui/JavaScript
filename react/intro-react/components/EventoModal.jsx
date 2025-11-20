import React from 'react'

export default function EventoModal() {
  return (
    <div>
      mostrarEventos && eventos.map((evento, index) =>
      <div key={evento.id}>
        <h2>{index + 1} - {evento.titulo}</h2>
        <button onClick={() => handelClick(evento.id)}>Eliminar Evento</button>
      </div>
      )
    </div>
  )
}
