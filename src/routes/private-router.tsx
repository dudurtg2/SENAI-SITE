import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/auth-context'

interface PrivateProps {
  children: React.ReactNode
}

const Private: React.FC<PrivateProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Redirecionar para login se não autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export default Private
