import React from 'react'
import { Link } from 'react-router-dom'
import senaiLogo from '../../../assets/senai-logo.png'

const LoginHeader = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src={senaiLogo}
              alt="Logo SENAI"
            />
          </div>
          <nav className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Voltar
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default LoginHeader 