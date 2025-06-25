import React from 'react'
import { Loader2, X } from 'lucide-react'

interface LoadingModalProps {
  isOpen: boolean
  onClose?: () => void
  title: string
  message: string
  allowClose?: boolean
  showProgress?: boolean
  progress?: number
}

const LoadingModal: React.FC<LoadingModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  allowClose = false,
  showProgress = false,
  progress = 0
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative transform overflow-hidden rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
          {/* Close button - only if allowed */}
          {allowClose && onClose && (
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          )}

          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-4">
              <Loader2 className="h-6 w-6 text-blue-600 animate-spin" />
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            
            <p className="text-sm text-gray-500 mb-6">
              {message}
            </p>

            {showProgress && (
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <div className="animate-pulse">•</div>
              <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>•</div>
              <div className="animate-pulse" style={{ animationDelay: '1s' }}>•</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingModal
