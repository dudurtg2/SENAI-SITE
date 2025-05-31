// src/context/UnauthorizedContext.tsx
import React, { createContext, useState, useContext } from 'react'
import ModalUnauthorized from '../components/modals/modal-unauthorized'

interface UnauthorizedContextProps {
  showModalUnauthorized: () => void
}

const UnauthorizedContext = createContext<UnauthorizedContextProps | undefined>(
  undefined
)

let showModalUnauthorized: () => void

export const UnauthorizedProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  showModalUnauthorized = () => {
    setIsModalOpen(true)
  }

  return (
    <UnauthorizedContext.Provider value={{ showModalUnauthorized }}>
      {children}
      <ModalUnauthorized isOpen={isModalOpen} />
    </UnauthorizedContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(UnauthorizedContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

export { showModalUnauthorized }
