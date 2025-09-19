import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Eye, EyeOff, User, Users, Mail, Lock, LogIn, AlertCircle } from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'
import { useLoginAuth } from '@/hooks/use-auth'
import ErrorModal from '@/components/modals/error-modal'

interface FormData {
  email: string
  password: string
  userType: 'aluno' | 'professor'
}

const LoginForm = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    userType: 'aluno'  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorType, setErrorType] = useState<'invalid_credentials' | 'email_not_found' | 'wrong_password' | 'account_locked' | 'network_error' | 'server_error' | 'generic'>('generic')
  
  // Validação de domínio removida - aceita qualquer email válido

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Validação do email
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido'    } else if (false) { // Validação de domínio removida
      // newErrors.email = 'Este domínio de e-mail não é permitido'
    }

    // Validação da senha
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória'
    }    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const loginMutation = useLoginAuth({
    onSuccess: (data: any) => {
      console.log('Login bem-sucedido:', data)
      login(data)
      
      // Redirecionamento direto baseado no tipo de usuário
      if (formData.userType === 'professor') {
        navigate('/teacher')
      } else {
        navigate('/app')
      }
    },
    onError: (error: any) => {
      console.error('Erro no login:', error)
      setIsLoading(false)
      
      // Determinar tipo de erro baseado na resposta
      let errorTypeToShow: typeof errorType = 'generic'
      
      if (error?.response?.status === 401) {
        const errorMessage = error?.response?.data?.message?.toLowerCase() || ''
          if (errorMessage.includes('email') || errorMessage.includes('usuário')) {
          errorTypeToShow = 'email_not_found'
        } else if (errorMessage.includes('senha') || errorMessage.includes('password')) {
          errorTypeToShow = 'wrong_password'
        } else if (errorMessage.includes('bloqueada') || errorMessage.includes('locked') || errorMessage.includes('inativa')) {
          errorTypeToShow = 'account_locked'
        } else {
          errorTypeToShow = 'invalid_credentials'
        }
      } else if (error?.response?.status >= 500) {
        errorTypeToShow = 'server_error'
      } else if (!error?.response) {
        errorTypeToShow = 'network_error'
      }
      
      setErrorType(errorTypeToShow)
      setShowErrorModal(true)
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Limpar erro específico do campo
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as 'aluno' | 'professor'
    setFormData(prev => ({ ...prev, userType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    setErrors({})

    try {
      // Preparar dados para a API conforme a interface LoginMutation
      const loginData = {
        login: formData.email,
        senha: formData.password
      }

      loginMutation.mutate(loginData)
    } catch (error) {
      console.error('Erro no login:', error)
      setErrors({ submit: 'Erro ao fazer login. Tente novamente.' })
      setIsLoading(false)
    }
  }
  const handleGoogleLogin = () => {
    // Armazenar a URL de retorno
    const returnUrl = window.location.origin + '/login/oauth2/code/google'
    sessionStorage.setItem('google_login_return_url', returnUrl)
    
    const googleAuthUrl = `${import.meta.env.VITE_API_URL}/oauth2/authorization/google?redirect_uri=${encodeURIComponent(returnUrl)}`
    window.location.href = googleAuthUrl
  }

  const handleGuestAccess = () => {
    console.log('🎯 handleGuestAccess - Iniciando modo visitante')
    
    // Definir isGuest no localStorage ANTES de navegar
    localStorage.setItem('isGuest', 'true')
    console.log('🎯 handleGuestAccess - localStorage definido:', localStorage.getItem('isGuest'))
    
    // Aguardar um pouco para garantir que o localStorage seja processado
    setTimeout(() => {
      console.log('🎯 handleGuestAccess - Navegando para /app?guest=true via window.location')
      window.location.href = '/app?guest=true'
    }, 100) // 100ms de delay
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Erro geral */}
      {errors.submit && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3 flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <span className="text-red-700 text-sm">{errors.submit}</span>
        </div>
      )}

      {/* Email e Tipo de Conta em grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="seu.email@senai.br"
            />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        {/* Tipo de usuário */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Conta
          </label>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
              formData.userType === 'aluno' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
            }`}>
              <input
                type="radio"
                name="userType"
                value="aluno"
                checked={formData.userType === 'aluno'}
                onChange={handleRadioChange}
                className="sr-only"
              />
              <User className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium">Aluno</span>
            </label>
            
            <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
              formData.userType === 'professor' ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'
            }`}>
              <input
                type="radio"
                name="userType"
                value="professor"
                checked={formData.userType === 'professor'}
                onChange={handleRadioChange}
                className="sr-only"
              />
              <Users className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm font-medium">Professor</span>
            </label>
          </div>
        </div>
      </div>      {/* Senha com link para recuperação */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <a href="#" className="text-xs text-blue-600 hover:text-blue-500">
            Esqueceu sua senha?
          </a>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={formData.password}
            onChange={handleChange}
            className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              errors.password ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
            }`}
            placeholder="••••••••"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
      </div>

      {/* Botão de submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Entrando...
          </>
        ) : (
          <>
            <LogIn className="h-4 w-4 mr-2" />
            Entrar
          </>
        )}
      </button>      {/* Divisor */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">ou</span>
        </div>
      </div>

      {/* Botões alternativos em grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Google login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="hidden sm:inline">Continuar com </span>Google
        </button>

        {/* Acesso como visitante */}
        <button
          type="button"
          onClick={handleGuestAccess}
          className="flex justify-center items-center py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
        >
          <span className="hidden sm:inline">Continuar como </span>Visitante
        </button>
      </div>

      {/* Link para registro */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Não tem uma conta?{' '}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:text-blue-500 transition-colors"          >
            Crie uma conta gratuita
          </Link>
        </p>
      </div>

      {/* Modal de Erro */}
      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        errorType={errorType}        onRetry={() => {
          setShowErrorModal(false)
          // Refocus no primeiro campo com erro
          if (errors.email) {
            (document.querySelector('input[name="email"]') as HTMLInputElement)?.focus()
          } else if (errors.password) {
            (document.querySelector('input[name="password"]') as HTMLInputElement)?.focus()
          }
        }}
      />
    </form>
  )
}

export default LoginForm
