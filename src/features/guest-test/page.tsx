import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useGuest } from '../../contexts/guest-context'
import { useAuth } from '../../contexts/auth-context'

const GuestTestPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isGuest, setIsGuest } = useGuest()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    console.log('🧪 GuestTestPage - Estado inicial:', {
      isGuest,
      isAuthenticated,
      location: location.pathname + location.search
    })
  }, [isGuest, isAuthenticated, location])

  const testGuestAccess = () => {
    console.log('🧪 Testando acesso como visitante...')
    
    // Definir manualmente como visitante
    localStorage.setItem('isGuest', 'true')
    setIsGuest(true)
    
    // Navegar para dashboard
    navigate('/app/dashboard?guest=true')
  }

  const clearGuestMode = () => {
    console.log('🧪 Limpando modo visitante...')
    localStorage.removeItem('isGuest')
    setIsGuest(false)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">🧪 Teste de Visitante</h1>
        
        <div className="space-y-4 mb-6">
          <div className="p-3 bg-gray-100 rounded text-sm">
            <strong>Estado atual:</strong><br/>
            isGuest: {isGuest ? '✅ Sim' : '❌ Não'}<br/>
            isAuthenticated: {isAuthenticated ? '✅ Sim' : '❌ Não'}<br/>
            localStorage: {localStorage.getItem('isGuest') || 'null'}<br/>
            URL: {location.pathname + location.search}
          </div>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={testGuestAccess}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            🎯 Ativar Modo Visitante
          </button>
          
          <button
            onClick={clearGuestMode}
            className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            🗑️ Limpar Modo Visitante
          </button>
          
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            🏠 Voltar ao Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default GuestTestPage
