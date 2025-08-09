import React, { useState } from 'react'
import { Plus, X, Mail, User } from 'lucide-react'

interface AuthorManagerProps {
  autores: string[]
  onAddAuthor: (email: string) => void
  onRemoveAuthor: (index: number) => void
  error?: string
}

const AuthorManager: React.FC<AuthorManagerProps> = ({
  autores,
  onAddAuthor,
  onRemoveAuthor,
  error
}) => {
  const [newAuthorEmail, setNewAuthorEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleAddAuthor = () => {
    const email = newAuthorEmail.trim()
    
    // Validações
    if (!email) {
      setEmailError('Digite um email')
      return
    }
    
    if (!validateEmail(email)) {
      setEmailError('Digite um email válido')
      return
    }
    
    if (autores.includes(email)) {
      setEmailError('Este autor já foi adicionado')
      return
    }
    
    // Adicionar autor
    onAddAuthor(email)
    setNewAuthorEmail('')
    setEmailError('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddAuthor()
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Autores do Projeto
        </label>
        
        {/* Input para adicionar novo autor */}
        <div className="flex gap-2 mb-3">
          <div className="flex-1">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="email"
                value={newAuthorEmail}
                onChange={(e) => {
                  setNewAuthorEmail(e.target.value)
                  setEmailError('')
                }}
                onKeyPress={handleKeyPress}
                placeholder="Digite o email do autor"
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
            onClick={handleAddAuthor}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Adicionar
          </button>
        </div>
        
        {/* Lista de autores adicionados */}
        {autores.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Autores adicionados:</p>
            <div className="space-y-2">
              {autores.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border"
                >
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemoveAuthor(index)}
                    className="text-red-500 hover:text-red-700 transition-colors p-1"
                    title="Remover autor"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Mensagem quando não há autores */}
        {autores.length === 0 && (
          <div className="text-center py-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
            <User className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Nenhum autor adicionado ainda</p>
            <p className="text-xs text-gray-400">Digite um email acima para adicionar</p>
          </div>
        )}
        
        {/* Erro geral */}
        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
      </div>
    </div>
  )
}

export default AuthorManager
