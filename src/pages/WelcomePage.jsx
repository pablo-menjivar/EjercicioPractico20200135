import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Rocket, Zap, ArrowRight } from 'lucide-react'

const WelcomePage = () => {
  const [countdown, setCountdown] = useState(3)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          navigate('/dashboard')
          return 0
        }
        return prev - 1
      })
    }, 3000)
    return () => clearInterval(timer)
  }, [navigate])
  const handleRedirect = () => {
    navigate('/dashboard')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl max-w-md w-full mx-4">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-400 rounded-full blur-md opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-5 rounded-full shadow-lg">
              <Rocket className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3 flex items-center justify-center gap-2">
          <Zap className="text-yellow-500 fill-yellow-400" size={32} />
          ¡Bienvenido!
        </h1>
        <div className="mb-6">
          <p className="text-gray-600 mb-2">
            Tu experiencia está a punto de comenzar
          </p>
          <div className="inline-flex items-center bg-indigo-100 rounded-full px-4 py-2">
            <span className="text-sm font-medium text-indigo-700 mr-2">
              Redirección automática en
            </span>
            <div className="w-8 h-8 flex items-center justify-center bg-indigo-600 text-white font-bold rounded-full">
              {countdown}
            </div>
          </div>
        </div>
        <button onClick={handleRedirect} className="group flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]">
          Ir al Dashboard
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <div className="mt-6 text-xs text-gray-500 flex items-center justify-center gap-1">
          <span className="block h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          Conectado al sistema
        </div>
      </div>
    </div>
  )
}
export default WelcomePage