import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, User, Users, Mail, Lock, UserPlus, AlertCircle } from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'
import { useRegisterAuth } from '@/hooks/use-auth'
import RegistroSucessoModal from '@/components/modals/registro-sucesso-modal'
import ErrorModal from '@/components/modals/error-modal'

interface FormData {
  nome: string
  email: string
  password: string
  confirmPassword: string
  userType: 'aluno' | 'professor'
  termsAccepted: boolean
}

const RegisterForm = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'aluno',
    termsAccepted: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  
  // Estados para modais
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorType, setErrorType] = useState<'email_already_exists' | 'terms_required' | 'weak_password' | 'network_error' | 'server_error' | 'generic'>('generic')
  
  // Estados para o modal de sucesso
  const [registeredUserData, setRegisteredUserData] = useState<{
    nome: string
    tipo: 'PROFESSOR' | 'ALUNO'
  } | null>(null)
  // Validação de domínio removida - aceita qualquer email válido

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Validação do nome
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório'
    } else if (formData.nome.trim().length < 2) {
      newErrors.nome = 'Nome deve ter pelo menos 2 caracteres'
    }

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
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres'
    }

    // Validação da confirmação de senha
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem'
    }

    // Validação dos termos
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'Você deve aceitar os termos de uso'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const registerMutation = useRegisterAuth({
    onSuccess: (data: any) => {
      console.log('Registro bem-sucedido:', data)
      setIsLoading(false)
      
      // Preparar dados do usuário registrado
      setRegisteredUserData({
        nome: formData.nome,
        tipo: formData.userType === 'professor' ? 'PROFESSOR' : 'ALUNO'
      })
      
      // Mostrar modal de sucesso
      setShowSuccessModal(true)
    },    onError: (error: any) => {
      console.error('Erro no registro:', error)
      setIsLoading(false)
      
      // Determinar tipo de erro baseado na resposta
      let errorTypeToShow: typeof errorType = 'generic'
      
      if (error?.response?.status === 409) {
        errorTypeToShow = 'email_already_exists'
      } else if (error?.response?.status === 400) {
        const errorMessage = error?.response?.data?.message?.toLowerCase() || ''
        
        if (errorMessage.includes('termos') || errorMessage.includes('aceite')) {
          errorTypeToShow = 'terms_required'
        } else if (errorMessage.includes('senha') || errorMessage.includes('password')) {
          errorTypeToShow = 'weak_password'
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
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }))
    
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
      // Preparar dados para a API conforme a interface RegisterMutation
      const registerData = {
        login: formData.email,
        senha: formData.password,
        nome: formData.nome,
        tipo: formData.userType === 'professor' ? 'PROFESSOR' : 'ALUNO' as 'PROFESSOR' | 'ALUNO',
        aceiteTermos: formData.termsAccepted // Incluir o aceite de termos
      }

      registerMutation.mutate(registerData)
    } catch (error) {
      console.error('Erro no registro:', error)
      setErrors({ submit: 'Erro ao criar conta. Tente novamente.' })
      setIsLoading(false)
    }
  }
    const handleGoogleRegister = () => {
    // URL corrigida com validação e parâmetros adequados
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'
    const redirectUri = window.location.origin + '/login/oauth2/code/google'
    
    // Salvar intent de registro para identificar o fluxo
    sessionStorage.setItem('google_intent', 'register')
    sessionStorage.setItem('google_redirect_uri', redirectUri)
    
    // URL corrigida e padronizada
    const googleAuthUrl = `${baseUrl}/oauth2/authorization/google?redirect_uri=${encodeURIComponent(redirectUri)}&registration=true`
    
    console.log('🔗 Google Register - URL completa:', googleAuthUrl)
    console.log('📍 Redirect URI:', redirectUri)
    console.log('🌐 Base URL:', baseUrl)
    
    // Validar URL antes de redirecionar
    try {
      new URL(googleAuthUrl) // Validar se é uma URL válida
      window.location.href = googleAuthUrl
    } catch (error) {
      console.error('❌ URL do Google OAuth inválida:', error)
      alert('Erro na configuração do Google OAuth. Verifique a configuração do servidor.')
    }
  }

  // Funções para o modal de sucesso
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false)
  }
  const handleRedirectToDashboard = () => {
    setShowSuccessModal(false)
    
    // Redirecionamento baseado no tipo de usuário
    if (registeredUserData?.tipo === 'PROFESSOR') {
      navigate('/teacher')
    } else {
      navigate('/app')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nome e Email em grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="nome"
              name="nome"
              type="text"
              required
              value={formData.nome}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                errors.nome ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="Digite seu nome completo"
            />
          </div>
          {errors.nome && <p className="mt-1 text-sm text-red-600">{errors.nome}</p>}
        </div>

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
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}          <p className="mt-1 text-xs text-gray-500">
            Qualquer email válido é aceito
          </p>
        </div>
      </div>

      {/* Tipo de usuário */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Tipo de Conta
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
      </div>      {/* Senhas em grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Senha */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Senha
          </label>
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

        {/* Confirmar senha */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirmar Senha
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                errors.confirmPassword ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="••••••••"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
        </div>
      </div>

      {/* Termos de uso */}
      <div>
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className={`mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
              errors.termsAccepted ? 'border-red-300' : ''
            }`}
          />
          <span className="text-sm text-gray-700">
            Eu aceito os{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Termos de Uso
            </a>{' '}
            e a{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Política de Privacidade
            </a>
          </span>
        </label>
        {errors.termsAccepted && <p className="mt-1 text-sm text-red-600">{errors.termsAccepted}</p>}
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
            Criando conta...
          </>
        ) : (
          <>
            <UserPlus className="h-4 w-4 mr-2" />
            Criar Conta
          </>
        )}
      </button>

      {/* Divisor */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">ou</span>
        </div>
      </div>

      {/* Google register */}
      <button
        type="button"
        onClick={handleGoogleRegister}
        className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>        Continuar com Google
      </button>
        {/* Modal de Sucesso */}
      {showSuccessModal && registeredUserData && (
        <RegistroSucessoModal
          isOpen={showSuccessModal}
          onClose={handleCloseSuccessModal}
          userType={registeredUserData.tipo}
          userName={registeredUserData.nome}
          onRedirect={handleRedirectToDashboard}
        />
      )}

      {/* Modal de Erro */}
      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        errorType={errorType}
        onRetry={() => {
          setShowErrorModal(false)
          // Opcional: retentar o registro com os mesmos dados
        }}
        showRetryButton={true}
      />
    </form>
  )
}

export default RegisterForm
