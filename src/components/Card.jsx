// Componente reutilizable que muestra un cuadro con contenido
const Card = ({ children, className = '' }) => {
  return (
    // Se aplican las props del elemento `children` y la clase (`className`) de React
    <div className={`bg-white rounded-lg shadow-md p-4 border border-gray-100 ${className}`}>
      {children}
    </div>
  )
}
export default Card