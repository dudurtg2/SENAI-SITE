import React from 'react'
import { Plus, AlertTriangle, X, FolderPlus } from 'lucide-react'

interface CreateProjectConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  projectTitle?: string
  isLoading?: boolean
}

const CreateProjectConfirmationModal: React.FC<CreateProjectConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  projectTitle,
  isLoading = false
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative transform overflow-hidden rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            disabled={isLoading}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
              <FolderPlus className="h-6 w-6 text-blue-600" />
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Confirmar Criação do Projeto
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Tem certeza que deseja criar este projeto?
                </p>
                {projectTitle && (
                  <p className="text-sm font-medium text-blue-600 mt-2">
                    "{projectTitle}"
                  </p>
                )}
                <div className="mt-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      O projeto será criado e estará disponível imediatamente
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Você poderá editar as informações após a criação
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Outros usuários poderão visualizar o projeto
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-3">
            <button
              type="button"
              onClick={onConfirm}
              disabled={isLoading}
              className="inline-flex w-full justify-center items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Criando...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Criar Projeto
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed sm:mt-0 sm:w-auto"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProjectConfirmationModal
