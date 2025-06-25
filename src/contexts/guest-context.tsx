import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'

interface GuestContextType {
  isGuest: boolean
  setIsGuest: (isGuest: boolean) => void
  guestLimitations: {
    canCreateProjects: boolean
    canAccessAccount: boolean
    canReceiveNotifications: boolean
    canAccessTeacherArea: boolean
    maxProjectsView: number
  }
}

const GuestContext = createContext<GuestContextType | undefined>(undefined)

export const useGuest = () => {
  const context = useContext(GuestContext)
  if (context === undefined) {
    throw new Error('useGuest must be used within a GuestProvider')
  }
  return context
}

interface GuestProviderProps {
  children: ReactNode
}

export const GuestProvider: React.FC<GuestProviderProps> = ({ children }) => {
  const [isGuest, setIsGuest] = useState(false)
  const location = useLocation()

  // Verificar se o usuário está em modo visitante pela URL ou localStorage
  useEffect(() => {
    // Primeiro, verificar se o usuário está autenticado
    const savedAccessToken = Cookies.get('accessToken')
    const savedUser = Cookies.get('user')
    
    // Se o usuário está autenticado, NÃO é visitante
    if (savedAccessToken && savedUser) {
      setIsGuest(false)
      // Limpar qualquer estado de visitante salvo
      localStorage.removeItem('isGuest')
      return
    }
    
    // Se não está autenticado, verificar se deve estar em modo visitante
    const searchParams = new URLSearchParams(location.search)
    const guestParam = searchParams.get('guest')
    
    if (guestParam === 'true') {
      setIsGuest(true)
      // Salvar no localStorage para persistir durante a sessão
      localStorage.setItem('isGuest', 'true')
    } else {
      // Verificar localStorage apenas se não há autenticação
      const savedGuestStatus = localStorage.getItem('isGuest')
      setIsGuest(savedGuestStatus === 'true')
    }
  }, [location])

  // Definir limitações para visitantes
  const guestLimitations = {
    canCreateProjects: false,
    canAccessAccount: false,
    canReceiveNotifications: false,
    canAccessTeacherArea: false,
    maxProjectsView: 3
  }

  return (
    <GuestContext.Provider value={{ 
      isGuest, 
      setIsGuest, 
      guestLimitations 
    }}>
      {children}
    </GuestContext.Provider>
  )
}
