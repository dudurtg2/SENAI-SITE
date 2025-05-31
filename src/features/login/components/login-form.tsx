import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

const LoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    // Se a autenticação for bem-sucedida:
    navigate('/app') // Redireciona para a área logada
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
        // Aqui você pode adicionar lógica adicional, como logout do Google se necessário
        return
      }

      // Lógica de autenticação com Google (substitua com sua implementação real)
      console.log('Login com Google bem-sucedido', credentialResponseDecoded)
      // Se a autenticação for bem-sucedida:
      navigate('/app') // Redireciona para a área logada
    } catch (err) {
      console.error('Erro ao decodificar token do Google', err)
      setError('Ocorreu um erro ao processar o login com o Google. Tente novamente.')
    }
  }

  const handleGoogleError = () => {
    console.log('Login com Google falhou')
    setError('Login com Google falhou. Tente novamente.')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <div className="space-y-4">
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