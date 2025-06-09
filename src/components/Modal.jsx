// Este modal contiene un título y un contenido. Se puede cerrar con un boton.
// Este modal servira para añadir los datos
import Button from './Button'
import { X } from 'lucide-react'

const Modal = ({ isOpen, onClose, title, children }) => {
  // Si el modal no está abierto, no renderizamos nada
  if (!isOpen) return null
  
  return (
    // Modal con un fondo negro opaco y un contenedor con un borde y un sombreado
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md animate-fadeIn">
        <div className="border-b border-gray-200 p-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <Button onClick={onClose} variant="secondary" className="p-1">
            <X size={20} />
          </Button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  )
}
export default Modal