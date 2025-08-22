import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Importar o logo
import senaiLogoPath from '@/assets/images/Imagens/022-Senai.png'

interface HeaderProps {
  // Propriedades do componente, se necessário
}

// Componente de Sub-navegação
const SectionSubNav: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  const sectionPages = {
    '/comunidade-maker': { name: 'Comunidade Maker', icon: '👥', color: 'blue' },
    '/biblioteca-maker': { name: 'Biblioteca Maker', icon: '📚', color: 'orange' }, 
    '/laboratorio-maker': { name: 'Laboratório Maker', icon: '🔬', color: 'cyan' },
    '/projetos-inovadores': { name: 'Projetos Inovadores', icon: '🚀', color: 'purple' },
    '/educacao-tecnologica': { name: 'Educação Tecnológica', icon: '🎓', color: 'green' }
  }
  
  const currentSection = sectionPages[location.pathname as keyof typeof sectionPages]
  
  if (!currentSection) return null

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Breadcrumb melhorado */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="hover:underline">Página Inicial</span>
            </button>
            
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{currentSection.icon}</span>
              <span className="text-gray-800 font-semibold text-lg">{currentSection.name}</span>
            </div>
          </div>

          {/* Mini navegação para outras seções */}
          <div className="hidden lg:flex items-center space-x-3">
            <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold mr-2">Explorar:</span>
            <div className="flex items-center space-x-2">
              {Object.entries(sectionPages).map(([path, section]) => {
                if (path !== location.pathname) {
                  return (
                    <button
                      key={path}
                      onClick={() => navigate(path)}
                      className={`group flex items-center space-x-1 text-xs px-3 py-2 bg-white border rounded-lg hover:shadow-md transition-all duration-200 hover:scale-105 ${
                        section.color === 'blue' ? 'border-blue-200 hover:bg-blue-50 hover:border-blue-300' :
                        section.color === 'orange' ? 'border-orange-200 hover:bg-orange-50 hover:border-orange-300' :
                        section.color === 'cyan' ? 'border-cyan-200 hover:bg-cyan-50 hover:border-cyan-300' :
                        section.color === 'purple' ? 'border-purple-200 hover:bg-purple-50 hover:border-purple-300' :
                        'border-green-200 hover:bg-green-50 hover:border-green-300'
                      }`}
                    >
                      <span className="text-sm">{section.icon}</span>
                      <span className="font-medium">{section.name}</span>
                    </button>
                  )
                }
                return null
              })}
            </div>
          </div>

          {/* Botão mobile para menu de seções */}
          <div className="lg:hidden">
            <button className="flex items-center space-x-1 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>Seções</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  // Verificar se estamos na landing page
  const isLandingPage = location.pathname === '/'

  // Função para lidar com navegação dos links
  const handleNavigation = (section: string) => {
    if (isLandingPage) {
      // Se estivermos na landing page, usar scroll suave
      const element = document.querySelector(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Se não estivermos na landing page, navegar para a landing page com a seção
      navigate(`/${section}`)
    }
  }

  return (
    <header className="w-full">
      {/* Barra Superior Azul - Inspirada no header do FIEB/SENAI */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="text-blue-100 font-medium">Outros portais:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://www.fieb.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-xs font-medium transition-all duration-200"
                >
                  FIEB
                </a>
                <a 
                  href="http://www.senaicimatec.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-xs font-medium transition-all duration-200"
                >
                  SENAI CIMATEC
                </a>
                <a 
                  href="https://www.senaibahia.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-xs font-medium transition-all duration-200"
                >
                  SENAI BAHIA
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <span className="text-blue-100 font-medium">Acesso rápido:</span>
              <a 
                href="https://senaiweb6.fieb.org.br/framehtml/web/app/edu/PortalEducacional/login/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded text-xs font-medium transition-all duration-200 hover:scale-105"
              >
                Portal do Aluno
              </a>
              <a 
                href="https://senaiweb6.fieb.org.br/FrameHTML/web/app/Edu/PortalDoProfessor/#/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded text-xs font-medium transition-all duration-200 hover:scale-105"
              >
                Portal do Docente
              </a>
              <a 
                href="mailto:contato@senai.com.br" 
                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded text-xs font-medium transition-all duration-200 hover:scale-105"
              >
                Webmail
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <div className="bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo e Navegação Principal */}
            <div className="flex items-center space-x-16">
              {/* Logo */}
              <button onClick={handleLogoClick} className="cursor-pointer">
                <img src={senaiLogoPath} alt="Logo SENAI" className="h-16 hover:scale-105 transition-transform duration-200" />
              </button>

              {/* Navegação Principal (Desktop) */}
              <nav className="hidden lg:flex space-x-10">
                <button
                  onClick={() => handleNavigation('#sobre-senai')}
                  className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-200 relative group py-2"
                >
                  Sobre o SENAI
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                
                {/* Dropdown para Seções Maker */}
                <div className="relative group">
                  <button className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-200 relative py-2 flex items-center space-x-1">
                    <span>Seções Maker</span>
                    <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 mt-2">
                    <div className="py-3">
                      <button
                        onClick={() => navigate('/comunidade-maker')}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-3"
                      >
                        <span className="text-blue-500">👥</span>
                        <div>
                          <div className="font-medium">Comunidade Maker</div>
                          <div className="text-xs text-gray-500">Colaboração e networking</div>
                        </div>
                      </button>
                      <button
                        onClick={() => navigate('/biblioteca-maker')}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 flex items-center space-x-3"
                      >
                        <span className="text-orange-500">📚</span>
                        <div>
                          <div className="font-medium">Biblioteca Maker</div>
                          <div className="text-xs text-gray-500">Recursos e conhecimento</div>
                        </div>
                      </button>
                      <button
                        onClick={() => navigate('/laboratorio-maker')}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-200 flex items-center space-x-3"
                      >
                        <span className="text-cyan-500">🔬</span>
                        <div>
                          <div className="font-medium">Laboratório Maker</div>
                          <div className="text-xs text-gray-500">Equipamentos e prototipagem</div>
                        </div>
                      </button>
                      <button
                        onClick={() => navigate('/projetos-inovadores')}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 flex items-center space-x-3"
                      >
                        <span className="text-purple-500">🚀</span>
                        <div>
                          <div className="font-medium">Projetos Inovadores</div>
                          <div className="text-xs text-gray-500">Desenvolvimento e inovação</div>
                        </div>
                      </button>
                      <button
                        onClick={() => navigate('/educacao-tecnologica')}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 flex items-center space-x-3"
                      >
                        <span className="text-green-500">🎓</span>
                        <div>
                          <div className="font-medium">Educação Tecnológica</div>
                          <div className="text-xs text-gray-500">Cursos e formação</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleNavigation('#eventos-noticias')}
                  className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-200 relative group py-2"
                >
                  Eventos e Notícias
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  onClick={() => handleNavigation('#outros-links')}
                  className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-200 relative group py-2"
                >
                  Links Úteis
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  onClick={() => handleNavigation('#equipe')}
                  className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-200 relative group py-2"
                >
                  Equipe
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  onClick={() => handleNavigation('#contato')}
                  className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-200 relative group py-2"
                >
                  Contato
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              </nav>
            </div>

            {/* Área de Login e Menu Mobile */}
            <div className="flex items-center space-x-4">
              {/* Botão de Login (Desktop) */}
              <button 
                onClick={handleLogin}
                className="hidden md:flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
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

              {/* Botão Menu Mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              <button
                onClick={() => {
                  handleNavigation('#sobre-senai')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Sobre o SENAI
              </button>
              <button
                onClick={() => {
                  handleNavigation('#eventos-noticias')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Eventos e Notícias
              </button>
              <button
                onClick={() => {
                  handleNavigation('#outros-links')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Links Úteis
              </button>
              <button
                onClick={() => {
                  handleNavigation('#equipe')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Equipe
              </button>
              <button
                onClick={() => {
                  handleNavigation('#contato')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Contato
              </button>
              
              {/* Login no Mobile */}
              <div className="pt-3 border-t border-gray-200">
                <button 
                  onClick={() => {
                    handleLogin()
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center justify-center space-x-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200"
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
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Sub-navegação melhorada */}
      <SectionSubNav />
    </header>
  )
}

export default Header
