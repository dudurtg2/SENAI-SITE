import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Eye, EyeOff, User, Users, UserPlus } from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'
import { useLoginAuth, useRegisterAuth } from '@/hooks/use-auth'

interface FormData {
  email: string
  password: string
  confirmPassword?: string
  nome?: string
  userType: 'student' | 'teacher'
}

const EnhancedLoginForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  const [isLogin, setIsLogin] = useState(true) // true = login, false = registro
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    nome: '',
    userType: 'student'
  })
  
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // Validação de domínio removida - aceita qualquer email válido

  const loginMutation = useLoginAuth({
    onSuccess: (data: any) => {
      console.log('Login bem-sucedido:', data)
      login(data)
      
      // Redirecionamento baseado no tipo de usuário
      if (formData.userType === 'teacher') {
        navigate('/teacher')
      } else {
        navigate('/app')
      }
    },
    onError: (error: any) => {
      console.error('Erro no login:', error)
      setError('Email ou senha incorretos. Tente novamente.')
      setIsLoading(false)
    }
  })

  const registerMutation = useRegisterAuth({
    onSuccess: (data: any) => {
      console.log('Registro bem-sucedido:', data)
      login(data)
      
      // Redirecionamento após registro
      if (formData.userType === 'teacher') {
        navigate('/teacher')
      } else {
        navigate('/app')
      }
    },
    onError: (error: any) => {
      console.error('Erro no registro:', error)
      setError('Erro ao criar conta. Tente novamente.')
      setIsLoading(false)
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (error) setError('')
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as 'student' | 'teacher'
    setFormData(prev => ({ ...prev, userType: value }))
  }

  const handleGoogleLogin = () => {
    // URL corrigida com validação e parâmetros adequados
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'
    const redirectUri = window.location.origin + '/login/oauth2/code/google'
    
    // Salvar intent de login para identificar o fluxo
    sessionStorage.setItem('google_intent', 'login')
    sessionStorage.setItem('google_redirect_uri', redirectUri)
    
    // URL corrigida e padronizada
    const googleAuthUrl = `${baseUrl}/oauth2/authorization/google?redirect_uri=${encodeURIComponent(redirectUri)}`
    
    console.log('🔗 Google Login - URL completa:', googleAuthUrl)
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
  const handleGuestAccess = () => {
    // Acesso como visitante - sempre redirecionar para dashboard com parâmetro guest
    navigate('/app/dashboard?guest=true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const { email, password, confirmPassword, nome } = formData

    // Validações básicas
    if (!email || !password) {
      setError('Preencha todos os campos obrigatórios')
      return
    }    // Validação de domínio removida
    /*
    if (!validateEmailDomain(email)) {
      setError('Este domínio de e-mail não é permitido')
      return
    }
    */

    if (!isLogin) {
      // Validações adicionais para registro
      if (!nome) {
        setError('Nome é obrigatório para registro')
        return
      }
      
      if (password !== confirmPassword) {
        setError('As senhas não coincidem')
        return
      }
      
      if (password.length < 6) {
        setError('A senha deve ter pelo menos 6 caracteres')
        return
      }
    }

    setIsLoading(true)
    
    if (isLogin) {
      // Login
      loginMutation.mutate({
        login: email, 
        senha: password
      })    } else {      // Registro
      registerMutation.mutate({
        login: email,
        senha: password,
        nome: nome!,
        tipo: formData.userType === 'teacher' ? 'PROFESSOR' : 'ALUNO',
        aceiteTermos: true // Por padrão aceita termos neste formulário simplificado
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Toggle entre Login e Registro */}
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            isLogin 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Entrar
        </button>
        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            !isLogin 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Criar Conta
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        {/* Nome (apenas para registro) */}
        {!isLogin && (
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo *
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required={!isLogin}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Seu nome completo"
              value={formData.nome || ''}
              onChange={handleChange}
            />
          </div>
        )}
        
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="seu.email@exemplo.com"
            value={formData.email}
            onChange={handleChange}
          />          <p className="mt-1 text-xs text-gray-500">
            Qualquer email válido é aceito
          </p>
        </div>

        {/* Senha */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Senha *
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete={isLogin ? 'current-password' : 'new-password'}
              required
              className="appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-400" />
              ) : (
                <Eye className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
          {!isLogin && (
            <p className="mt-1 text-xs text-gray-500">
              Mínimo de 6 caracteres
            </p>
          )}
        </div>

        {/* Confirmar Senha (apenas para registro) */}
        {!isLogin && (
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar Senha *
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required={!isLogin}
                className="appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="••••••••"
                value={formData.confirmPassword || ''}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        )}

        {/* Tipo de Usuário */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Tipo de Usuário *
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
              formData.userType === 'student' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}>
              <input
                type="radio"
                name="userType"
                value="student"
                checked={formData.userType === 'student'}
                onChange={handleRadioChange}
                className="sr-only"
              />
              <User className={`h-5 w-5 mr-3 ${
                formData.userType === 'student' ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <div>
                <div className={`font-medium ${
                  formData.userType === 'student' ? 'text-blue-900' : 'text-gray-900'
                }`}>
                  Estudante
                </div>
                <div className={`text-sm ${
                  formData.userType === 'student' ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  Acesso aos projetos e cursos
                </div>
              </div>
            </label>

            <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
              formData.userType === 'teacher' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}>
              <input
                type="radio"
                name="userType"
                value="teacher"
                checked={formData.userType === 'teacher'}
                onChange={handleRadioChange}
                className="sr-only"
              />
              <Users className={`h-5 w-5 mr-3 ${
                formData.userType === 'teacher' ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <div>
                <div className={`font-medium ${
                  formData.userType === 'teacher' ? 'text-blue-900' : 'text-gray-900'
                }`}>
                  Professor
                </div>
                <div className={`text-sm ${
                  formData.userType === 'teacher' ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  Gerenciar alunos e projetos
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="space-y-3">
          {/* Botão principal */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {isLogin ? 'Entrando...' : 'Criando conta...'}
              </div>
            ) : (
              <div className="flex items-center">
                {isLogin ? (
                  <User className="h-4 w-4 mr-2" />
                ) : (
                  <UserPlus className="h-4 w-4 mr-2" />
                )}
                {isLogin ? 'Entrar' : 'Criar Conta'}
              </div>
            )}
          </button>

          {/* Login com Google */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
              <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continuar com Google
          </button>

          {/* Acesso como visitante */}
          <button
            type="button"
            onClick={handleGuestAccess}
            className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <Eye className="h-4 w-4 mr-2" />
            Continuar como Visitante
          </button>
        </div>

        {/* Lembrar-me (apenas para login) */}
        {isLogin && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Lembrar-me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Esqueceu a senha?
              </a>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default EnhancedLoginForm
