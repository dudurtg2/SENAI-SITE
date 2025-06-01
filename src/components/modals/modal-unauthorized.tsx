import React, { useRef } from 'react'

import { TriangleAlert } from 'lucide-react'

import Cookies from 'js-cookie'
import { message } from 'antd'

interface ModalUnauthorizedProps {
  isOpen: boolean
}

const ModalUnauthorized: React.FC<ModalUnauthorizedProps> = ({ isOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleLogout = () => {
    Cookies.remove('accessTokenIntegrado')
    Cookies.remove('userData')
    Cookies.remove('selectedOffers')
    Cookies.remove('cod_cidade')
    message.success('Você esta sendo redirecionado para o login!')
    setTimeout(() => {
      window.location.href = '/'
    }, 2000)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="relative w-full max-w-sm p-6 mx-auto my-auto bg-white dark:bg-dark-box rounded-xl shadow-xl"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-progress-red rounded-full">
            <TriangleAlert color="red" />
          </div>
          <div className="mt-3">
            <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-dark-text">
              Sessão Expirada
            </h3>
            <div className="mt-2 mb-3">
              <p className="text-sm text-gray-500 dark:text-dark-muted">
                Sua sessão expirou. Por favor, faça login novamente para
                continuar.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 dark:bg-dark-bg-soft">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 dark:bg-progress-red rounded-md shadow-sm hover:bg-red-500 dark:hover:bg-red-600"
          >
            Refazer Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalUnauthorized
