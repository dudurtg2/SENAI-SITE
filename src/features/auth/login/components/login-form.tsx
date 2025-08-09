import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@/contexts/user-context'
import { useLoginAuth } from '@/hooks/use-auth'

const LoginForm = () => {
  const navigate = useNavigate()
  const { setUser, setIsAuthenticated } = useUser()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'student' as 'student' | 'teacher'
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // Validação de domínio removida - aceita qualquer email válido
    const loginMutation = useLoginAuth({
    onSuccess: data => {
      console.log('Login bem-sucedido:', data)
      
      // Mapear dados para o contexto do usuário
      const userData = {
        id: data.usuariosEntity.uuid,
        name: data.usuariosEntity.nome,
        email: data.usuariosEntity.email,
        token: data.accessToken
      }
      
      setUser(userData)
      setIsAuthenticated(true)
      
      // Redirecionamento baseado no tipo de usuário do backend
      if (data.usuariosEntity.tipo === 'PROFESSOR') {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Limpar mensagens de erro quando o usuário começa a digitar
    if (error) setError('')
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as 'student' | 'teacher'
    setFormData(prev => ({ ...prev, userType: value }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const { email, password } = formData

    // Validações básicas
    if (!email || !password) {
      setError('Preencha todos os campos')
      return
    }    // Validação de domínio removida
    /*
    if (!validateEmailDomain(email)) {
      setError('Este domínio de e-mail não é permitido')
      return
    }
    */

    setIsLoading(true)
    // Enviar requisição de login
    loginMutation.mutate({
      login: email, 
      senha: password
    })
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
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
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Senha
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-center space-x-6">
        <div className="flex items-center">
          <input
            id="student"
            name="userType"
            type="radio"
            value="student"
            checked={formData.userType === 'student'}
            onChange={handleRadioChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <label htmlFor="student" className="ml-2 block text-sm text-gray-700">
            Estudante
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="teacher"
            name="userType"
            type="radio"
            value="teacher"
            checked={formData.userType === 'teacher'}
            onChange={handleRadioChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <label htmlFor="teacher" className="ml-2 block text-sm text-gray-700">
            Professor
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Lembrar-me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Esqueceu sua senha?
          </a>
        </div>
      </div>      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? 'Entrando...' : 'Entrar'}
        </button>
      </div>
    </form>
  )
}

export default LoginForm
