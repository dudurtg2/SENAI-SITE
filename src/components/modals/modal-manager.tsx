import React from 'react'
import { useAuth } from '../../contexts/auth-context'
import LogoutConfirmationModal from './logout-confirmation-modal'

const ModalManager: React.FC = () => {
  const {
    user,
    showLogoutModal,
    setShowLogoutModal,
    confirmLogout
  } = useAuth()

  return (
    <>
      {/* Modal de confirmação de logout */}
      <LogoutConfirmationModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={confirmLogout}
        userName={user?.nome}
      />
    </>
  )
}

export default ModalManager
