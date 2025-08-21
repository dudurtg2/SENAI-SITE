import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSmoothScroll } from '@/hooks/use-smooth-scroll'
import '@/styles/navigation.css'
import Header from '../landing-page/components/Header/Header'
import Footer from '../landing-page/components/Footer/Footer'

interface SectionLayoutProps {
  children: React.ReactNode
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ children }) => {
  // Aplicar scroll suave para navegação
  useSmoothScroll()
  
  const navigate = useNavigate()
  const location = useLocation()

  // Verificar se não estamos na landing page
  const isNotLandingPage = location.pathname !== '/'

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <div className="App">
      <Header />
      
      {/* Breadcrumb/Botão de voltar */}
      {isNotLandingPage && (
        <div className="bg-gray-100 border-b">
          <div className="container mx-auto px-4 py-3">
            <button
              onClick={handleBackToHome}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para a página inicial
            </button>
          </div>
        </div>
      )}
      
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default SectionLayout