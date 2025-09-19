import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/auth-context'
import { useGuest } from '../contexts/guest-context'

interface PrivateProps {
  children: React.ReactNode
  requireAuth?: boolean // Por padrão true, pode ser false para permitir visitantes
}

const Private: React.FC<PrivateProps> = ({ children, requireAuth = true }) => {
  const { isAuthenticated, isLoading } = useAuth()
  const { isGuest } = useGuest()

  // Debug logs
  console.log('🛡️ Private Router Debug:', {
    isAuthenticated,
    isLoading,
    isGuest,
    requireAuth,
    currentUrl: window.location.href
  })

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Se requer autenticação e não está autenticado nem é visitante
  if (requireAuth && !isAuthenticated && !isGuest) {
    console.log('🛡️ Private Router: Redirecting to login - not authenticated and not guest')
    return <Navigate to="/login" replace />
  }

  // Se não está autenticado nem é visitante, mas a rota não requer auth
  if (!requireAuth && !isAuthenticated && !isGuest) {
    return <Navigate to="/" replace />
  }

  // Se não requer autenticação, permite acesso a qualquer um (auth, guest, ou não-auth)
  // Se requer autenticação, só permite se autenticado OU visitante
  return <>{children}</>
}

export default Private
