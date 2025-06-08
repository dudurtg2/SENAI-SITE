import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useLoginAuth, useGoogleLogin } from '../../../hooks/use-mutation'
import { useAuth } from '../../../contexts/auth-context'

const LoginForm = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const allowedDomains = [
    '@ba.estudante.senai.br',
    '@ba.senai.br',
    '@gmail.com'
  ]

  const validateEmailDomain = (email: string): boolean => {
    return allowedDomains.some(domain => email.endsWith(domain))
  }
  const loginMutation = useLoginAuth({
    onSuccess: data => {
      console.log('Login bem-sucedido:', data)
      login(data)
      navigate('/app')
    },
    onError: (error: any) => {
      console.error('Erro no login:', error)
      setError('Email ou senha incorretos. Tente novamente.')
      setIsLoading(false)
    }
  })

  const googleLoginMutation = useGoogleLogin({
    onSuccess: data => {
      console.log('Login com Google bem-sucedido:', data)
      login(data)
      navigate('/app')
    },
    onError: (error: any) => {
      console.error('Erro no login com Google:', error)
      setError('Erro ao autenticar com Google. Tente novamente.')
      setIsLoading(false)
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (!validateEmailDomain(formData.email)) {
      setError(
        'Por favor, use um email institucional do SENAI (@ba.estudante.senai.br ou @ba.senai.br).'
      )
      setIsLoading(false)
      return
    }

    // Fazer login com a API
    loginMutation.mutate({
      login: formData.email,
      senha: formData.password
    })
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
      setIsLoading(true)
      const credentialResponseDecoded: any = jwtDecode(
        credentialResponse.credential
      )
      const email = credentialResponseDecoded.email

      if (!validateEmailDomain(email)) {
        setError(
          'Login com Google falhou: Por favor, use um email institucional do SENAI.'
        )
        setIsLoading(false)
        return
      }

      // Para Google OAuth, vamos simular o processo já que o fluxo é diferente
      // Aqui você precisaria implementar o fluxo OAuth completo
      console.log('Google credential:', credentialResponseDecoded)

      // Simular dados de retorno baseado no formato esperado
      const mockGoogleResponse = {
        accessToken: 'mock_google_token',
        refreshToken: 'mock_google_refresh',
        usuariosEntity: {
          uuid: 'google-user-id',
          nome: credentialResponseDecoded.name || 'Usuário Google',
          email: credentialResponseDecoded.email,
          tipo: 'VISITANTE',
          telefonePessoal: null,
          telefoneProfissional: null,
          linkedin: null,
          endereco: null,
          status: 'ATIVO',
          criadoEm: new Date().toISOString(),
          atualizadoEm: new Date().toISOString(),
          matricula: null,
          curso: null,
          especialidade: null,
          departamento: null
        }
      }

      login(mockGoogleResponse)
      navigate('/app')
    } catch (err) {
      console.error('Erro ao decodificar token do Google', err)
      setError(
        'Ocorreu um erro ao processar o login com o Google. Tente novamente.'
      )
      setIsLoading(false)
    }
  }

  const handleGoogleError = () => {
    console.log('Login com Google falhou')
    setError('Login com Google falhou. Tente novamente.')
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email institucional
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
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
            disabled={isLoading}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
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
          disabled={isLoading}
          className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Entrando...' : 'Entrar'}
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
