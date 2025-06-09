import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Rocket, Zap, ArrowRight } from 'lucide-react'

const WelcomePage = () => {
  // Estado para manejar la cuenta regresiva
  const [countdown, setCountdown] = useState(3)
  // Hook para navegacion entre rutas
  const navigate = useNavigate()
  // Efecto para manejar la cuenta regresiva y redireccion automática
  useEffect(() => {
    // Configurar un intervalo que se ejecuta cada 3 segundos
    const timer = setInterval(() => {
      setCountdown((prev) => {
        // Cuando el contador llega a 1, detener el intervalo y redirigir
        if (prev <= 1) {
          clearInterval(timer)
          navigate('/dashboard') // Navegar al dashboard
          return 0
        }
        return prev - 1 // Decrementar el contador
      })
    }, 3000) // Intervalo de 3 segundos
    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(timer)
  }, [navigate]) // Dependencia: navigate
  // Funcion para redirigir manualmente al dashboard
  const handleRedirect = () => {
    navigate('/dashboard')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Contenedor principal */}
      <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl max-w-md w-full mx-4">
        {/* Icono animado con  */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Efecto de brillo animado detras del icono */}
            <div className="absolute -inset-4 bg-indigo-400 rounded-full blur-md opacity-30 animate-pulse"></div>
            {/* Contenedor del icono con gradiente */}
            <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-5 rounded-full shadow-lg">
              <Rocket className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>
        {/* Titulo principal */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3 flex items-center justify-center gap-2">
          <Zap className="text-yellow-500 fill-yellow-400" size={32} />
          ¡Bienvenido!
        </h1>
        {/* Mensaje y contador de redireccion */}
        <div className="mb-6">
          <p className="text-gray-600 mb-2">
            Tu experiencia está a punto de comenzar
          </p>
          {/* Badge con contador */}
          <div className="inline-flex items-center bg-indigo-100 rounded-full px-4 py-2">
            <span className="text-sm font-medium text-indigo-700 mr-2">
              Redirección automática en
            </span>
            {/* Circulo con numero del contador */}
            <div className="w-8 h-8 flex items-center justify-center bg-indigo-600 text-white font-bold rounded-full">
              {countdown}
            </div>
          </div>
        </div>
        {/* Boton para redireccion manual */}
        <button onClick={handleRedirect} className="group flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]">
          Ir al Dashboard
          {/* Flecha con animacion al pasar el cursor */}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        {/* Indicador de conexion (solo decorativo) */}
        <div className="mt-6 text-xs text-gray-500 flex items-center justify-center gap-1">
          <span className="block h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          Conectado al sistema
        </div>
      </div>
    </div>
  )
}
export default WelcomePage