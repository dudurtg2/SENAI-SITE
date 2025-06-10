import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useUser } from '../../../contexts/user-context'

const LoginForm = () => {
  const navigate = useNavigate()
  const { setUserType, setIsAuthenticated, setUserInfo } = useUser()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'student' as 'student' | 'teacher'
  })
  const [error, setError] = useState('')

  const allowedDomains = ['@ba.estudante.br', '@ba.senai.br'] // Domínios permitidos

  const validateEmailDomain = (email: string): boolean => {
    return allowedDomains.some(domain => email.endsWith(domain))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!validateEmailDomain(formData.email)) {
      setError('Por favor, use um email institucional do SENAI (@ba.estudante.br ou @ba.senai.br).')
      return
    }

    // Lógica de autenticação (substitua com sua implementação real)
    console.log('Login com formulário', formData)
    
    // Define o tipo de usuário e autentica
    setUserType(formData.userType)
    setIsAuthenticated(true)
    setUserInfo({ email: formData.email, type: formData.userType })
    
    // Redireciona baseado no tipo de usuário
    if (formData.userType === 'teacher') {
      navigate('/teacher/dashboard')
    } else {
      navigate('/app')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpa o erro ao digitar novamente
    setError('')
  }
  const handleGoogleSuccess = (credentialResponse: any) => {
    try {
      const credentialResponseDecoded: any = jwtDecode(credentialResponse.credential)
      const email = credentialResponseDecoded.email

      if (!validateEmailDomain(email)) {
        setError('Login com Google falhou: Por favor, use um email institucional do SENAI.')
        return
      }

      // Lógica de autenticação com Google (substitua com sua implementação real)
      console.log('Login com Google bem-sucedido', credentialResponseDecoded)
      
      // Define o tipo de usuário e autentica
      setUserType(formData.userType)
      setIsAuthenticated(true)
      setUserInfo({ email, type: formData.userType })
      
      // Redireciona baseado no tipo de usuário
      if (formData.userType === 'teacher') {
        navigate('/teacher/dashboard')
      } else {
        navigate('/app')
      }
    } catch (err) {
      console.error('Erro ao decodificar token do Google', err)
      setError('Ocorreu um erro ao processar o login com o Google. Tente novamente.')
    }
  }

  const handleGoogleError = () => {
    console.log('Login com Google falhou')
    setError('Login com Google falhou. Tente novamente.')
  }

  return (    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <div className="space-y-4">
        {/* Seleção de tipo de usuário */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de usuário
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="userType"
                value="student"
                checked={formData.userType === 'student'}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Estudante</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="userType"
                value="teacher"
                checked={formData.userType === 'teacher'}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Professor</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email institucional
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="••••••••"
          />
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
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Lembrar-me
          </label>
        </div>

        <div className="text-sm">
          <a 
            href="https://senaiweb6.fieb.org.br/framehtml/web/app/edu/PortalEducacional/login/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Esqueceu sua senha?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
        >
          Entrar
        </button>
      </div>

      {/* Botão de Login com Google */}
      <div className="w-full">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
          text="continue_with"
          shape="rectangular"
          width="100%"
          theme="filled_black"
          logo_alignment="center"
          locale="pt-BR"
        />
      </div>
    </form>
  )
}

export default LoginForm 