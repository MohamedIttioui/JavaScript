import './Modal.css'
export default function Modal({ children, handelCerrar }) {
  return (
    <div className="modal-fondo">
      <div className="modal">
        {children}
        <button onClick={handelCerrar}>Cerrar</button>
      </div>
    </div>
  );
}
