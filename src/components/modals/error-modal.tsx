import React from 'react'
import { AlertTriangle, X, RefreshCw, Mail, Lock, Eye, EyeOff } from 'lucide-react'

interface ErrorModalProps {
  isOpen: boolean
  onClose: () => void
  errorType: 'invalid_credentials' | 'email_not_found' | 'wrong_password' | 'account_locked' | 'network_error' | 'server_error' | 'email_already_exists' | 'terms_required' | 'weak_password' | 'generic'
  onRetry?: () => void
  showRetryButton?: boolean
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  isOpen,
  onClose,
  errorType,
  onRetry,
  showRetryButton = true
}) => {
  if (!isOpen) return null

  const getErrorInfo = () => {
    switch (errorType) {
      case 'invalid_credentials':
        return {
          title: 'Credenciais Inválidas',
          message: 'Email ou senha incorretos. Verifique seus dados e tente novamente.',
          icon: <Lock className="h-6 w-6 text-red-600" />,
          suggestions: [
            'Verifique se o email está correto',
            'Certifique-se de que a senha está correta',
            'Verifique se o Caps Lock está desativado'
          ]
        }
      case 'email_not_found':
        return {
          title: 'Email Não Encontrado',
          message: 'Este email não está registrado em nosso sistema.',
          icon: <Mail className="h-6 w-6 text-red-600" />,
          suggestions: [
            'Verifique se digitou o email corretamente',
            'Tente com outro endereço de email',
            'Registre-se se ainda não tem uma conta'
          ]
        }
      case 'wrong_password':
        return {
          title: 'Senha Incorreta',
          message: 'A senha informada está incorreta.',
          icon: <EyeOff className="h-6 w-6 text-red-600" />,
          suggestions: [
            'Verifique se a senha está correta',
            'Certifique-se de que o Caps Lock está desativado',
            'Use a opção "Esqueci minha senha" se necessário'
          ]
        }
      case 'account_locked':
        return {
          title: 'Conta Bloqueada',
          message: 'Sua conta foi temporariamente bloqueada devido a muitas tentativas de login.',
          icon: <Lock className="h-6 w-6 text-red-600" />,
          suggestions: [
            'Aguarde alguns minutos antes de tentar novamente',
            'Entre em contato com o suporte se o problema persistir',
            'Verifique seu email para instruções de desbloqueio'
          ]
        }
      case 'network_error':
        return {
          title: 'Erro de Conexão',          message: 'Não foi possível conectar ao servidor. Verifique sua conexão com a internet.',
          icon: <RefreshCw className="h-6 w-6 text-red-600" />,
          suggestions: [
            'Verifique sua conexão com a internet',
            'Tente novamente em alguns momentos',
            'Reinicie seu roteador se necessário'
          ]
        }
      case 'server_error':
        return {
          title: 'Erro do Servidor',
          message: 'Ocorreu um erro interno no servidor. Tente novamente mais tarde.',
          icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
          suggestions: [
            'Tente novamente em alguns minutos',
            'Se o problema persistir, entre em contato com o suporte',
            'Verifique se não há manutenção programada'
          ]
        }
      case 'email_already_exists':
        return {
          title: 'Email Já Cadastrado',
          message: 'Este email já está registrado em nosso sistema.',
          icon: <Mail className="h-6 w-6 text-red-600" />,
          suggestions: [
            'Faça login se já tem uma conta',
            'Use outro endereço de email para criar uma nova conta',
            'Use a opção "Esqueci minha senha" se necessário'
          ]
        }
      case 'terms_required':
        return {
          title: 'Aceite dos Termos Obrigatório',
          message: 'É obrigatório aceitar os termos de uso para se cadastrar.',
          icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
          suggestions: [
            'Marque a caixa de aceite dos termos de uso',
            'Leia os termos de uso antes de aceitar',
            'Entre em contato se tiver dúvidas sobre os termos'
          ]
        }
      case 'weak_password':
        return {
          title: 'Senha Muito Fraca',
          message: 'A senha deve ter pelo menos 6 caracteres e ser mais segura.',
          icon: <Lock className="h-6 w-6 text-red-600" />,
          suggestions: [
            'Use pelo menos 6 caracteres',
            'Combine letras, números e símbolos',
            'Evite senhas muito simples como "123456"'
          ]
        }
      default:
        return {
          title: 'Erro Inesperado',
          message: 'Ocorreu um erro inesperado. Tente novamente.',
          icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
          suggestions: [
            'Tente novamente',
            'Atualize a página se necessário',
            'Entre em contato com o suporte se o problema persistir'
          ]
        }
    }
  }

  const errorInfo = getErrorInfo()

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
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              {errorInfo.icon}
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                {errorInfo.title}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-4">
                  {errorInfo.message}
                </p>
                
                {/* Sugestões */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    💡 Sugestões:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {errorInfo.suggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-3">
            {showRetryButton && onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex w-full justify-center items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors sm:w-auto"
              >
                <RefreshCw className="h-4 w-4" />
                Tentar Novamente
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors sm:mt-0 sm:w-auto"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal
