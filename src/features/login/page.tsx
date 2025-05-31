import React from 'react'
import LoginForm from './components/login-form'
import LoginHeader from './components/login-header'
import LoginFooter from './components/login-footer'
import bgCard from '../../assets/bg-card.jpg'

const LoginPage = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${bgCard})` }}
    >
      <LoginHeader />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Bem-vindo de volta</h2>
            <p className="mt-2 text-sm text-gray-600">
              Entre com suas credenciais para acessar sua conta
            </p>
          </div>
          <LoginForm />
        </div>
      </main>
      <LoginFooter />
    </div>
  )
}

export default LoginPage