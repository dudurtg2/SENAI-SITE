import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import Layout from './layout/layout'
import Routers from './routes/router'
import { GoogleOAuthProvider } from '@react-oauth/google'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // Não refaz ao focar na janela
      // refetchOnMount: false, // Não refaz ao montar componente
      // refetchOnReconnect: false, // Não refaz ao reconectar
      // staleTime: 5 * 60 * 1000, // 5 minutos (dados ficam "frescos")
      // gcTime: 10 * 60 * 1000, // 10 minutos no cache
      // retry: 1 // Só tenta 1 vez em caso de erro
    }
  }
})

// Verifica se estamos em desenvolvimento
const isDevelopment = process.env.NODE_ENV === 'development'

// Client ID do Google - use um valor padrão em desenvolvimento se não estiver definido
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || ''

if (isDevelopment && !GOOGLE_CLIENT_ID) {
  console.warn('Google Client ID não encontrado. O login com Google não funcionará.')
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <QueryClientProvider client={client}>
        <Routers />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
