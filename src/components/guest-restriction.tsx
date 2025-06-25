import React from 'react'
import { Link } from 'react-router-dom'
import { Lock, UserPlus, Eye } from 'lucide-react'
import { useGuest } from '../contexts/guest-context'
import { useAuth } from '../contexts/auth-context'

interface GuestRestrictionProps {
  feature: 'create' | 'account' | 'notifications' | 'teacher'
  children: React.ReactNode
  fallback?: React.ReactNode
}

const GuestRestriction: React.FC<GuestRestrictionProps> = ({ 
  feature, 
  children, 
  fallback 
}) => {
  const { isGuest, guestLimitations } = useGuest()
  const { isAuthenticated } = useAuth()

  // Se o usuário está autenticado, permitir acesso total
  if (isAuthenticated) {
    return <>{children}</>
  }

  // Se não é visitante e não está autenticado, redirecionar para login
  if (!isGuest && !isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <Lock className="h-16 w-16 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Acesso Restrito
        </h3>
        <p className="text-gray-600 text-center mb-6">
          Você precisa fazer login para acessar esta funcionalidade.
        </p>
        <Link
          to="/login"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Fazer Login
        </Link>
      </div>
    )
  }

  // Verificar limitações para visitantes
  if (isGuest) {
    const restrictions = {
      create: !guestLimitations.canCreateProjects,
      account: !guestLimitations.canAccessAccount,
      notifications: !guestLimitations.canReceiveNotifications,
      teacher: !guestLimitations.canAccessTeacherArea
    }

    if (restrictions[feature]) {
      if (fallback) {
        return <>{fallback}</>
      }

      const messages = {
        create: {
          title: 'Criar Projetos',
          description: 'Visitantes não podem criar novos projetos. Faça login para criar e gerenciar seus projetos.'
        },
        account: {
          title: 'Configurações da Conta',
          description: 'Visitantes não podem acessar configurações de conta. Crie uma conta para personalizar seu perfil.'
        },
        notifications: {
          title: 'Notificações',
          description: 'Visitantes não recebem notificações. Faça login para receber atualizações em tempo real.'
        },
        teacher: {
          title: 'Área do Professor',
          description: 'Visitantes não podem acessar a área do professor. Faça login com uma conta de professor.'
        }
      }

      const message = messages[feature]

      return (
        <div className="flex flex-col items-center justify-center py-12 px-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Eye className="h-8 w-8 text-blue-600" />
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {message.title} - Modo Visitante
          </h3>
          
          <p className="text-gray-600 text-center mb-6 max-w-md">
            {message.description}
          </p>
          
          <div className="flex space-x-3">
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Criar Conta
            </Link>
            
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Fazer Login
            </Link>
          </div>
        </div>
      )
    }
  }

  // Se chegou até aqui, permitir acesso
  return <>{children}</>
}

export default GuestRestriction
