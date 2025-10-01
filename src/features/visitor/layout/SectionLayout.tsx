import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '@/styles/navigation.css'
import Header from '../landing-page/components/Header/Header'
import Footer from '../landing-page/components/Footer/Footer'

interface SectionLayoutProps {
  children: React.ReactNode
}

// Componente de navegação adicional para melhor UX
const SectionBreadcrumb: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  const sectionPages = {
    '/vitrine-tecnologica': { name: 'Vitrine Tecnológica', description: 'Desenvolvimento e inovação' },
    '/biblioteca-maker': { name: 'Biblioteca Maker', description: 'Acesse recursos educacionais' }, 
    '/laboratorio-maker': { name: 'Laboratório Maker', description: 'Equipamentos e prototipagem' },
    '/comunidade-maker': { name: 'Comunidade Maker', description: 'Conecte-se com outros makers' },
    '/educacao-tecnologica': { name: 'Educação Tecnológica', description: 'Cursos e formação' },
    '/sobre': { name: 'Sobre o SENAI', description: 'Conheça nossa história e missão' }
  }
  
  const currentSection = sectionPages[location.pathname as keyof typeof sectionPages]
  
  if (!currentSection || location.pathname === '/') return null

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Breadcrumb com melhor design */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hover:underline">Voltar ao início</span>
            </button>
            
            <div className="hidden sm:flex items-center space-x-2 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-700 font-medium">{currentSection.name}</span>
            </div>
          </div>

          {/* Info da seção atual */}
          <div className="hidden md:flex items-center space-x-3 text-right">
            <div>
              <div className="text-sm font-medium text-gray-800">{currentSection.name}</div>
              <div className="text-xs text-gray-500">{currentSection.description}</div>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Botão flutuante para voltar ao topo e navegação rápida
const FloatingNavigation: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (location.pathname === '/') return null

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}>
      <div className="flex flex-col space-y-3">
        {/* Botão para voltar ao topo */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
          title="Voltar ao topo"
        >
          <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        {/* Botão para voltar à página inicial */}
        <button
          onClick={() => navigate('/')}
          className="w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
          title="Voltar à página inicial"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <SectionBreadcrumb />
      
      <main>
        {children}
      </main>
      
      <Footer />
      <FloatingNavigation />
    </div>
  )
}

export default SectionLayout