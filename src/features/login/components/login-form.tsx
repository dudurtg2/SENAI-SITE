import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useUser } from '../../../contexts/user-context'
import { useLoginAuth, useGoogleLogin } from '../../../hooks/use-mutation'

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
      setUser(data)
      setIsAuthenticated(true)
      navigate('/app')
    },
    onError: (error: any) => {
      console.error('Erro no login:', error)
      setError('Email ou senha incorretos. Tente novamente.')
      setIsLoading(false)
    }
  })

  // Resto do código do arquivo...
}
