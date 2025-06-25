import React from 'react'
import { Link } from 'react-router-dom'
import { Eye, UserPlus, LogIn, X } from 'lucide-react'
import { useGuest } from '../contexts/guest-context'

const GuestBanner = () => {
  const { isGuest, setIsGuest } = useGuest()

  if (!isGuest) return null

  const handleDismiss = () => {
    setIsGuest(false)
    localStorage.removeItem('isGuest')
    // Opcional: redirecionar para login
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="h-5 w-5" />
            <div>
              <p className="text-sm font-medium">
                Você está navegando como <strong>Visitante</strong>
              </p>
              <p className="text-xs text-blue-100">
                Algumas funcionalidades estão limitadas. Faça login para acesso completo.
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link
              to="/login"
              className="inline-flex items-center px-3 py-1 border border-white/30 rounded-md text-xs font-medium bg-white/10 hover:bg-white/20 transition-colors"
            >
              <LogIn className="h-3 w-3 mr-1" />
              Fazer Login
            </Link>
            
            <Link
              to="/login"
              className="inline-flex items-center px-3 py-1 bg-white text-blue-600 rounded-md text-xs font-medium hover:bg-blue-50 transition-colors"
            >
              <UserPlus className="h-3 w-3 mr-1" />
              Criar Conta
            </Link>
            
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-white/10 rounded transition-colors"
              title="Dispensar banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuestBanner
