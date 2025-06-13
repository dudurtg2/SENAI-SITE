import React, { createContext, useContext, useState, ReactNode } from 'react'

type User = {
  id: string
  name: string
  email: string
  token: string
  type?: 'student' | 'teacher' | null
}

type UserContextType = {
  user: User | null
  setUser: (user: User | null) => void
  isAuthenticated: boolean
  setIsAuthenticated: (auth: boolean) => void
  setUserType: (type: 'student' | 'teacher' | null) => void
  setUserInfo: (info: User | null) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setUserType = (type: 'student' | 'teacher' | null) => {
    if (user) {
      setUser({ ...user, type })
    }
  }

  const setUserInfo = (info: User | null) => {
    setUser(info)
  }

  return (
    <UserContext.Provider 
      value={{ 
        user, 
        setUser, 
        isAuthenticated, 
        setIsAuthenticated,
        setUserType,
        setUserInfo 
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider')
  }
  return context
}
