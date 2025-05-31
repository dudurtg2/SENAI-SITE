import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import Layout from './layout/layout'
import Routers from './routes/router'
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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Routers />
    </QueryClientProvider>
  </React.StrictMode>
)
