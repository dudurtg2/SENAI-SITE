import React, { createContext, useContext, useState, ReactNode } from 'react'

export type UserType = 'student' | 'teacher' | null

interface UserContextType {
  userType: UserType
  setUserType: (type: UserType) => void
  isAuthenticated: boolean
  setIsAuthenticated: (auth: boolean) => void
  userInfo: any
  setUserInfo: (info: any) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userType, setUserType] = useState<UserType>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userInfo, setUserInfo] = useState(null)

  const value = {
    userType,
    setUserType,
    isAuthenticated,
    setIsAuthenticated,
    userInfo,
    setUserInfo
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
