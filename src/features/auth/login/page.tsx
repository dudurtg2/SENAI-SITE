import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './components/simple-login-form'
import bgCard from '@/assets/bg-card.jpg'
import senaiLogo from '@/assets/images/Imagens/022-Senai.png'

const LoginPage = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${bgCard})` }}
    >
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-10 w-auto"
                src={senaiLogo}
                alt="Logo SENAI"
              />
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">SENAI</h1>
                <p className="text-sm text-gray-600">Portal do Estudante</p>
              </div>
            </Link>
            <nav className="flex space-x-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                ← Voltar ao Início
              </Link>
            </nav>
          </div>
        </div>
      </header>      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-5xl w-full mx-auto">          {/* Card principal */}
          <div className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 rounded-2xl shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Bem-vindo de volta!
              </h2>
              <p className="text-gray-600">
                Entre com suas credenciais para acessar o portal
              </p>
            </div>            
            <LoginForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              © 2025 SENAI. Todos os direitos reservados.
            </div>
          
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LoginPage