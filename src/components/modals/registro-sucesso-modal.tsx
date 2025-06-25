import React, { useEffect, useState } from 'react'
import { Check, X } from 'lucide-react'

interface RegistroSucessoModalProps {
  isOpen: boolean
  onClose: () => void
  userType: 'PROFESSOR' | 'ALUNO'
  userName: string
  onRedirect: () => void
}

const RegistroSucessoModal: React.FC<RegistroSucessoModalProps> = ({
  isOpen,
  onClose,
  userType,
  userName,
  onRedirect
}) => {
  const [countdown, setCountdown] = useState(3)

  // Auto-redirecionar após 3 segundos com contador
  useEffect(() => {
    if (isOpen) {
      setCountdown(3)
      
      const interval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(interval)
            onRedirect()
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isOpen, onRedirect])

  if (!isOpen) return null

  const getDashboardName = () => {
    return userType === 'PROFESSOR' ? 'Dashboard do Professor' : 'Dashboard do Aluno'
  }

  const getDashboardDescription = () => {
    if (userType === 'PROFESSOR') {
      return 'Gerencie suas turmas, projetos e acompanhe o progresso dos seus alunos.'
    }
    return 'Acesse seus projetos, visualize suas notas e acompanhe seu progresso acadêmico.'
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 transform animate-scale-in">
        {/* Header */}
        <div className="relative p-6 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          
          {/* Ícone de Sucesso Animado */}
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          
          {/* Título */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            🎉 Conta Criada com Sucesso!
          </h2>
          
          {/* Mensagem de boas-vindas */}
          <p className="text-gray-600 mb-4">
            Bem-vindo(a), <span className="font-semibold text-gray-900">{userName}</span>!
          </p>
          
          {/* Informações do tipo de usuário */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              {userType === 'PROFESSOR' ? (
                <div className="text-2xl">👨‍🏫</div>
              ) : (
                <div className="text-2xl">👨‍🎓</div>
              )}
            </div>
            <h3 className="font-semibold text-blue-900 mb-1">
              {getDashboardName()}
            </h3>
            <p className="text-sm text-blue-700">
              {getDashboardDescription()}
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
          <div className="flex flex-col space-y-3">
            {/* Botão principal */}
            <button
              onClick={onRedirect}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Ir para o Dashboard
            </button>
            
            {/* Contador regressivo com círculo de progresso */}
            <div className="flex items-center justify-center space-x-2">
              <div className="relative w-4 h-4">
                <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
                <div 
                  className="absolute inset-0 rounded-full border-2 border-blue-600 transition-all duration-1000"
                  style={{
                    transform: `rotate(${(3 - countdown) * 120}deg)`,
                    borderTopColor: 'transparent',
                    borderRightColor: countdown > 2 ? 'transparent' : '#2563eb',
                    borderBottomColor: countdown > 1 ? 'transparent' : '#2563eb',
                    borderLeftColor: countdown > 0 ? 'transparent' : '#2563eb'
                  }}
                ></div>
              </div>
              <p className="text-xs text-gray-500">
                Redirecionamento automático em {countdown} segundo{countdown !== 1 ? 's' : ''}...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistroSucessoModal
