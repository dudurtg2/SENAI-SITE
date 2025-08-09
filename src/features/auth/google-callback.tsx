import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/auth-context'

interface UserData {
  accessToken: string
  usuariosEntity: {
    tipo: 'PROFESSOR' | 'ALUNO'
    nome: string
    email: string  }
}

// Função de diagnóstico completo
function diagnoseGoogleOAuth() {
  console.log('🔍 === DIAGNÓSTICO GOOGLE OAUTH ===')
  
  // 1. Verificar variáveis de ambiente
  console.log('🌐 VITE_API_URL:', import.meta.env.VITE_API_URL)
  
  // 2. Verificar URL atual
  console.log('📍 URL atual:', window.location.href)
  console.log('📍 Origin:', window.location.origin)
  
  // 3. Verificar parâmetros da URL
  const urlParams = new URLSearchParams(window.location.search)
  console.log('📋 Parâmetros URL:')
  for (const [key, value] of urlParams.entries()) {
    console.log(`   ${key}: ${value.substring(0, 50)}${value.length > 50 ? '...' : ''}`)
  }
  
  // 4. Verificar sessionStorage
  console.log('💾 SessionStorage:')
  console.log('   google_auth_data:', sessionStorage.getItem('google_auth_data') ? 'presente' : 'ausente')
  console.log('   google_intent:', sessionStorage.getItem('google_intent'))
  console.log('   google_redirect_uri:', sessionStorage.getItem('google_redirect_uri'))
  
  // 5. Verificar localStorage
  console.log('💾 LocalStorage:')
  const authData = localStorage.getItem('auth_data')
  console.log('   auth_data:', authData ? 'presente' : 'ausente')
  
  console.log('🔍 === FIM DIAGNÓSTICO ===')
}

const GoogleCallback = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  const [status, setStatus] = useState('Processando login...')
  const [error, setError] = useState('')
  useEffect(() => {
    console.log('🔧 GoogleCallback - useEffect iniciado')
    console.log('📍 URL atual:', window.location.href)
    console.log('📍 Location:', location)
    
    // Diagnóstico completo
    diagnoseGoogleOAuth()

    const handleGoogleCallback = async () => {
      try {
        setStatus('Verificando dados de autenticação...')
        
        // Verificar intent salvo
        const intent = sessionStorage.getItem('google_intent')
        console.log('🎯 Intent detectado:', intent)
        
        // Método 1: Verificar se há dados JSON diretamente na URL (query param 'data')
        const urlParams = new URLSearchParams(location.search)
        const dataParam = urlParams.get('data')
        
        if (dataParam) {
          console.log('✅ Dados JSON encontrados na URL')
          try {
            const userData: UserData = JSON.parse(decodeURIComponent(dataParam))
            console.log('📦 Dados do usuário da URL:', userData)
            
            setStatus('Login realizado com sucesso!')
            login(userData)
            
            const userType = userData.usuariosEntity?.tipo
            console.log('👤 Tipo de usuário:', userType)
            
            setTimeout(() => {
              if (userType === 'PROFESSOR') {
                console.log('👨‍🏫 Redirecionando para teacher dashboard')
                navigate('/teacher', { replace: true })
              } else {
                console.log('👨‍🎓 Redirecionando para student dashboard')
                navigate('/app', { replace: true })
              }
            }, 1000)
            
            return
          } catch (parseError) {
            console.error('❌ Erro ao processar dados da URL:', parseError)
          }
        }
        
        // Método 2: Verificar se temos dados no sessionStorage
        const googleAuthData = sessionStorage.getItem('google_auth_data')
        if (googleAuthData) {
          console.log('✅ Dados encontrados no sessionStorage')
          try {
            const userData: UserData = JSON.parse(googleAuthData)
            console.log('📦 Dados do usuário do sessionStorage:', userData)
            
            sessionStorage.removeItem('google_auth_data')
            
            setStatus('Login realizado com sucesso!')
            login(userData)
            
            const userType = userData.usuariosEntity?.tipo
            console.log('👤 Tipo de usuário:', userType)
            
            setTimeout(() => {
              if (userType === 'PROFESSOR') {
                console.log('👨‍🏫 Redirecionando para teacher dashboard')
                navigate('/teacher', { replace: true })
              } else {
                console.log('👨‍🎓 Redirecionando para student dashboard')
                navigate('/app', { replace: true })
              }
            }, 1000)
            
            return
          } catch (parseError) {
            console.error('❌ Erro ao processar sessionStorage:', parseError)
          }
        }
        
        // Método 3: OAuth tradicional com code e state
        const code = urlParams.get('code')
        const state = urlParams.get('state')
        
        if (code && state) {
          console.log('🌐 Code e State encontrados, fazendo requisição...')
          setStatus('Autenticando com Google...')
          
          const response = await fetch(`${import.meta.env.VITE_API_URL}/login/oauth2/code/google?code=${code}&state=${state}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          
          if (!response.ok) {
            throw new Error(`Erro na autenticação: ${response.status}`)
          }
          
          const userData: UserData = await response.json()
          console.log('✅ Dados recebidos do backend:', userData)
          
          setStatus('Login realizado com sucesso!')
          login(userData)
          
          const userType = userData.usuariosEntity?.tipo
          setTimeout(() => {
            if (userType === 'PROFESSOR') {
              navigate('/teacher', { replace: true })
            } else {
              navigate('/app', { replace: true })
            }
          }, 1000)
          
          return
        }
        
        // Método 4: Verificar se há parâmetro google_auth (redirecionamento em andamento)
        const googleAuth = urlParams.get('google_auth')
        
        if (googleAuth === 'true') {
          console.log('🔄 Redirecionamento do Google detectado')
          setStatus('Aguardando dados de autenticação...')
          
          // Aguardar um pouco para dados chegarem via sessionStorage
          let attempts = 0
          const maxAttempts = 20 // 10 segundos
          
          const checkForData = () => {
            attempts++
            console.log(`🔍 Tentativa ${attempts}/${maxAttempts} - verificando sessionStorage...`)
            
            const newGoogleAuthData = sessionStorage.getItem('google_auth_data')
            if (newGoogleAuthData) {
              try {
                const userData: UserData = JSON.parse(newGoogleAuthData)
                sessionStorage.removeItem('google_auth_data')
                
                setStatus('Login realizado com sucesso!')
                login(userData)
                
                const userType = userData.usuariosEntity?.tipo
                setTimeout(() => {
                  if (userType === 'PROFESSOR') {
                    navigate('/teacher', { replace: true })
                  } else {
                    navigate('/app', { replace: true })
                  }
                }, 1000)
                
                return
              } catch (parseError) {
                console.error('❌ Erro ao processar dados tardios:', parseError)
              }
            }
            
            if (attempts < maxAttempts) {
              setTimeout(checkForData, 500)
            } else {
              console.log('⏰ Timeout - dados não encontrados após espera')
              setError('Dados de login não encontrados após aguardar')
              setTimeout(() => navigate('/login', { replace: true }), 2000)
            }
          }
          
          checkForData()
          return
        }
        
        // Se chegou até aqui sem encontrar dados válidos
        console.log('❌ Nenhum método de autenticação válido encontrado')
        setError('Método de autenticação não reconhecido')
        setTimeout(() => {
          navigate('/login', { replace: true })
        }, 2000)
        
      } catch (error) {
        console.error('❌ Erro no callback do Google:', error)
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
        setError(`Erro na autenticação: ${errorMessage}`)
        setTimeout(() => {
          navigate('/login', { replace: true })
        }, 3000)
      }
    }

    handleGoogleCallback()
  }, [location, navigate, login])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        {error ? (
          <>
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-red-900 mb-2">
              Erro na Autenticação
            </h2>
            <p className="text-red-700 mb-4">{error}</p>
            <div className="text-sm text-gray-500">
              Redirecionando para página de login...
            </div>
          </>
        ) : (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Processando Login do Google
            </h2>
            <p className="text-gray-600 mb-4">{status}</p>
            <div className="text-sm text-gray-500">
              Aguarde alguns segundos...
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default GoogleCallback