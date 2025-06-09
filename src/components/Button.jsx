// Este boton contiene un clase base de estilos y un conjunto de variantes que se utilizan en otras interfaces para
// darle un aspecto visual unico a cada boton. Ademas, se puede personalizar el boton con una clase personalizada
const Button = ({ children, onClick, variant = 'primary', icon: Icon, className = '' }) => {
  const baseClasses = "font-medium py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg",
    secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm",
    danger: "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg"
  }
  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {Icon && <Icon size={18} />}
      {children}
    </button>
  )
}
export default Button