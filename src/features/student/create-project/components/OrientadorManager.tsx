import React, { useState } from 'react'
import { Plus, X, Mail, UserCheck, AlertCircle } from 'lucide-react'

interface OrientadorManagerProps {
  orientador: string
  onSetOrientador: (email: string) => void
  onRemoveOrientador: () => void
  error?: string
}

const OrientadorManager: React.FC<OrientadorManagerProps> = ({
  orientador,
  onSetOrientador,
  onRemoveOrientador,
  error
}) => {
  const [newOrientadorEmail, setNewOrientadorEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSetOrientador = () => {
    const email = newOrientadorEmail.trim()
    
    // Validações
    if (!email) {
      setEmailError('Digite um email')
      return
    }
    
    if (!validateEmail(email)) {
      setEmailError('Digite um email válido')
      return
    }
    
    // Definir orientador
    onSetOrientador(email)
    setNewOrientadorEmail('')
    setEmailError('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSetOrientador()
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Orientador do Projeto
        </label>
        
        {/* Se não há orientador, mostrar input */}
        {!orientador ? (
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="flex-1">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="email"
                    value={newOrientadorEmail}
                    onChange={(e) => {
                      setNewOrientadorEmail(e.target.value)
                      setEmailError('')
                    }}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite o email do orientador"
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      emailError ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>
              <button
                type="button"
                onClick={handleSetOrientador}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Definir
              </button>
            </div>
            
            {/* Estado vazio */}
            <div className="text-center py-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
              <UserCheck className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Nenhum orientador definido</p>
              <p className="text-xs text-gray-400">Digite um email acima para definir</p>
            </div>
          </div>
        ) : (
          /* Se há orientador, mostrar informações */
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg border border-green-200">
              <div className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-green-600" />
                <div>
                  <span className="text-sm font-medium text-green-800">Orientador</span>
                  <p className="text-sm text-green-700">{orientador}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onRemoveOrientador}
                className="text-red-500 hover:text-red-700 transition-colors p-1"
                title="Remover orientador"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            {/* Opção para alterar orientador */}
            <div className="flex gap-2">
              <div className="flex-1">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="email"
                    value={newOrientadorEmail}
                    onChange={(e) => {
                      setNewOrientadorEmail(e.target.value)
                      setEmailError('')
                    }}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite um novo email para alterar"
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      emailError ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>
              <button
                type="button"
                onClick={handleSetOrientador}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Alterar
              </button>
            </div>
          </div>
        )}
        
        {/* Erro geral */}
        {error && (
          <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        )}
        
        {/* Informação sobre orientador */}
        <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium">Sobre o Orientador:</p>
              <p>O orientador é responsável por acompanhar o desenvolvimento do projeto e fornecer orientações técnicas e pedagógicas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrientadorManager
