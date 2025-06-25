import React from 'react'
import { CheckCircle, X, ArrowRight } from 'lucide-react'

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  actionButtonText?: string
  onAction?: () => void
  showActionButton?: boolean
  icon?: React.ReactNode
  autoClose?: boolean
  autoCloseDelay?: number
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  actionButtonText = 'Continuar',
  onAction,
  showActionButton = false,
  icon,
  autoClose = false,
  autoCloseDelay = 3000
}) => {
  React.useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(() => {
        onClose()
      }, autoCloseDelay)
      
      return () => clearTimeout(timer)
    }
  }, [isOpen, autoClose, autoCloseDelay, onClose])

  if (!isOpen) return null

  const defaultIcon = <CheckCircle className="h-6 w-6 text-green-600" />

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative transform overflow-hidden rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              {icon || defaultIcon}
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            
            <p className="text-sm text-gray-500 mb-6">
              {message}
            </p>

            <div className="flex flex-col gap-3">
              {showActionButton && onAction && (
                <button
                  onClick={onAction}
                  className="inline-flex w-full justify-center items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition-colors"
                >
                  {actionButtonText}
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
              
              <button
                onClick={onClose}
                className="inline-flex w-full justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>

          {autoClose && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="text-xs text-gray-400">
                Fechando automaticamente...
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SuccessModal
