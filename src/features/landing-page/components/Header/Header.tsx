import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Importar o logo

import senaiLogoPath from '../../../../assets/images/Imagens/022-Senai.png'

interface HeaderProps {
  // Propriedades do componente, se necessário
}

const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <header className="bg-white w-full shadow-md">
      {' '}
      {/* Adicionado sombra como na imagem */}
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {' '}
        {/* Ajustado padding */}
        {/* Logo e Links de Navegação */}
        <div className="flex items-center space-x-8">
          {' '}
          {/* Aumentado espaço entre logo e links */}
          {/* Logo como Imagem */}
          <a href="/">
            <img src={senaiLogoPath} alt="Logo SENAI" className="h-10" />{' '}
            {/* Ajuste a altura (h-8) conforme necessário */}
          </a>
          {/* Links de Navegação (Visível em telas médias+) */}
          <nav className="hidden md:flex space-x-8">
            {' '}
            {/* Ajustado espaço entre links */}
            <a
              href="#repositorio"
              className="text-gray-600 hover:text-senai-blue text-sm"
            >
              Repositório
            </a>
            <a
              href="#lab-maker"
              className="text-gray-600 hover:text-senai-blue text-sm"
            >
              Lab Maker
            </a>
            <a
              href="#biblioteca-maker"
              className="text-gray-600 hover:text-senai-blue text-sm"
            >
              Biblioteca Maker
            </a>
          </nav>
        </div>
        {/* Botão de Login (Visível em telas médias+) */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={handleLogin}
            className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2 text-sm hover:bg-gray-800 transition-colors"
          >
            {/* Ícone de Login (Placeholder SVG - substitua por um ícone real se disponível) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Login</span>
          </button>
        </div>
        {/* Botão Hamburger (Visível em telas pequenas) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Menu Mobile (Aparece quando o botão Hamburger é clicado) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <nav className="flex flex-col space-y-2">
            <a
              href="#repositorio"
              className="text-gray-600 hover:text-senai-blue py-1"
            >
              Repositório
            </a>
            <a
              href="#lab-maker"
              className="text-gray-600 hover:text-senai-blue py-1"
            >
              Lab Maker
            </a>
            <a
              href="#biblioteca-maker"
              className="text-gray-600 hover:text-senai-blue py-1"
            >
              Biblioteca Maker
            </a>
            <button 
              onClick={handleLogin}
              className="bg-black text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 text-sm hover:bg-gray-800 transition-colors mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>Login</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
