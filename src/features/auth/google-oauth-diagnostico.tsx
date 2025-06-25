import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GoogleOAuthDiagnostico = () => {
  const location = useLocation()
  const [diagnostico, setDiagnostico] = useState<any>(null)

  useEffect(() => {
    executarDiagnostico()
  }, [])

  const executarDiagnostico = () => {
    const urlParams = new URLSearchParams(window.location.search)
    
    const diagnosticoData = {
      timestamp: new Date().toISOString(),
      url: {
        href: window.location.href,
        origin: window.location.origin,
        pathname: window.location.pathname,
        search: window.location.search,
        parametros: Object.fromEntries(urlParams.entries())
      },
      ambiente: {
        VITE_API_URL: import.meta.env.VITE_API_URL,
        NODE_ENV: import.meta.env.NODE_ENV,
        userAgent: navigator.userAgent
      },
      armazenamento: {
        sessionStorage: {
          google_auth_data: sessionStorage.getItem('google_auth_data') ? 'presente' : 'ausente',
          google_intent: sessionStorage.getItem('google_intent'),
          google_redirect_uri: sessionStorage.getItem('google_redirect_uri'),
          google_register_return_url: sessionStorage.getItem('google_register_return_url')
        },
        localStorage: {
          auth_data: localStorage.getItem('auth_data') ? 'presente' : 'ausente'
        }
      },
      validacoes: {
        temCode: urlParams.has('code'),
        temState: urlParams.has('state'),
        temData: urlParams.has('data'),
        temError: urlParams.has('error'),
        temGoogleAuth: urlParams.has('google_auth')
      }
    }

    setDiagnostico(diagnosticoData)
    console.log('🔍 Diagnóstico completo:', diagnosticoData)
  }

  const testarGoogleLogin = () => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'
    const redirectUri = window.location.origin + '/login/oauth2/code/google'
    const googleAuthUrl = `${baseUrl}/oauth2/authorization/google?redirect_uri=${encodeURIComponent(redirectUri)}`
    
    console.log('🧪 Testando Google Login:', googleAuthUrl)
    window.location.href = googleAuthUrl
  }

  const testarGoogleRegister = () => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'
    const redirectUri = window.location.origin + '/login/oauth2/code/google'
    const googleAuthUrl = `${baseUrl}/oauth2/authorization/google?redirect_uri=${encodeURIComponent(redirectUri)}&registration=true`
    
    sessionStorage.setItem('google_intent', 'register')
    console.log('🧪 Testando Google Register:', googleAuthUrl)
    window.location.href = googleAuthUrl
  }

  const limparSessionStorage = () => {
    sessionStorage.clear()
    console.log('🧹 SessionStorage limpo')
    executarDiagnostico()
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            🔍 Diagnóstico Google OAuth
          </h1>
          
          {/* Ações */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <button
              onClick={executarDiagnostico}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              🔄 Atualizar Diagnóstico
            </button>
            <button
              onClick={testarGoogleLogin}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              🧪 Testar Login Google
            </button>
            <button
              onClick={testarGoogleRegister}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              🧪 Testar Registro Google
            </button>
            <button
              onClick={limparSessionStorage}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              🧹 Limpar Session
            </button>
          </div>

          {diagnostico && (
            <div className="space-y-6">
              {/* URL Info */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">📍 Informações da URL</h3>
                <div className="text-sm text-blue-800 space-y-1">
                  <p><strong>URL Completa:</strong> {diagnostico.url.href}</p>
                  <p><strong>Origin:</strong> {diagnostico.url.origin}</p>
                  <p><strong>Path:</strong> {diagnostico.url.pathname}</p>
                  <p><strong>Search:</strong> {diagnostico.url.search}</p>
                </div>
                
                {Object.keys(diagnostico.url.parametros).length > 0 && (
                  <div className="mt-3">
                    <strong className="text-blue-900">Parâmetros:</strong>
                    <div className="bg-blue-100 p-2 rounded mt-1">
                      {Object.entries(diagnostico.url.parametros).map(([key, value]: [string, any]) => (
                        <div key={key} className="text-xs">
                          <strong>{key}:</strong> {String(value).substring(0, 100)}
                          {String(value).length > 100 && '...'}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Validações */}
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">✅ Validações OAuth</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
                  {Object.entries(diagnostico.validacoes).map(([key, value]: [string, any]) => (
                    <div key={key} className={`flex items-center ${value ? 'text-green-700' : 'text-red-700'}`}>
                      <span className="mr-1">{value ? '✅' : '❌'}</span>
                      {key}
                    </div>
                  ))}
                </div>
              </div>

              {/* Ambiente */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">🌐 Ambiente</h3>
                <div className="text-sm text-green-800 space-y-1">
                  <p><strong>API URL:</strong> {diagnostico.ambiente.VITE_API_URL || 'não definida'}</p>
                  <p><strong>NODE_ENV:</strong> {diagnostico.ambiente.NODE_ENV}</p>
                </div>
              </div>

              {/* Armazenamento */}
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">💾 Armazenamento</h3>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-purple-900">SessionStorage:</strong>
                    <div className="bg-purple-100 p-2 rounded mt-1">
                      {Object.entries(diagnostico.armazenamento.sessionStorage).map(([key, value]: [string, any]) => (
                        <div key={key}>
                          <strong>{key}:</strong> {String(value)}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <strong className="text-purple-900">LocalStorage:</strong>
                    <div className="bg-purple-100 p-2 rounded mt-1">
                      {Object.entries(diagnostico.armazenamento.localStorage).map(([key, value]: [string, any]) => (
                        <div key={key}>
                          <strong>{key}:</strong> {String(value)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* JSON Completo */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">📋 Dados Completos (JSON)</h3>
                <pre className="text-xs bg-gray-100 p-3 rounded overflow-auto max-h-64">
                  {JSON.stringify(diagnostico, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GoogleOAuthDiagnostico
