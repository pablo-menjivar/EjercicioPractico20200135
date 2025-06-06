import { Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import Dashboard from './pages/Dashboard'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }
        }}
      />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}
export default App