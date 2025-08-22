import React, { useState, useEffect } from 'react'
import '@/styles/navigation.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import CardSection from './components/Cards/CardSection'
import SocialMediaSection from './components/SocialMedia/SocialMediaSection'
import EventsSection from './components/Events/EventsSection'
import LinksSection from './components/Links/LinksSection'
import InfoSection from './components/Info/InfoSection'
import Footer from './components/Footer/Footer'

// Componente de navegação flutuante para a landing page
const LandingPageFloatingNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min((scrolled / maxHeight) * 100, 100)
      
      setIsVisible(scrolled > 300)
      setScrollProgress(progress)
      setIsScrollingUp(scrolled < lastScrollY)
      setLastScrollY(scrolled)

      // Detectar seção ativa
      const sections = ['sobre-senai', 'eventos-noticias', 'outros-links', 'equipe', 'contato']
      const scrollPosition = scrolled + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const elementTop = element.offsetTop
          const elementBottom = elementTop + element.offsetHeight

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Chamada inicial
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const sections = [
    { id: 'sobre-senai', label: 'Sobre', icon: '🏢', color: 'bg-blue-500' },
    { id: 'eventos-noticias', label: 'Eventos', icon: '📅', color: 'bg-green-500' },
    { id: 'outros-links', label: 'Links', icon: '🔗', color: 'bg-purple-500' },
    { id: 'equipe', label: 'Equipe', icon: '👥', color: 'bg-orange-500' },
    { id: 'contato', label: 'Contato', icon: '📞', color: 'bg-red-500' }
  ]

  return (
    <>
      {/* Indicador de progresso fixo no topo - Melhorado */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className={`h-full transition-all duration-200 ease-out ${
            isScrollingUp 
              ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-green-600' 
              : 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600'
          }`}
          style={{ width: `${scrollProgress}%` }}
        ></div>
        
        {/* Efeito de brilho */}
        <div 
          className={`absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transition-transform duration-500 ${
            scrollProgress > 0 ? 'animate-pulse' : ''
          }`}
          style={{ 
            left: `${Math.max(0, scrollProgress - 4)}%`,
            transform: 'translateX(-50%)'
          }}
        ></div>
      </div>

      {/* Navegação flutuante */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-75'
      }`}>
        <div className="flex flex-col space-y-3">
          {/* Mini navegação para seções - Desktop */}
          <div className="hidden lg:flex flex-col space-y-2 mb-3">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group relative w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center transform hover:scale-110 animate-in slide-in-from-right-8 ${
                  activeSection === section.id
                    ? `${section.color} text-white scale-110 shadow-xl`
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
                title={section.label}
              >
                <span className={`text-lg transition-transform duration-200 ${
                  activeSection === section.id ? 'scale-110' : 'group-hover:scale-110'
                }`}>
                  {section.icon}
                </span>
                
                {/* Tooltip melhorado */}
                <div className={`absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-300 shadow-lg ${
                  activeSection === section.id ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100'
                }`}>
                  {section.label}
                  <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                </div>

                {/* Efeito de pulso para seção ativa */}
                {activeSection === section.id && (
                  <div className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></div>
                )}
              </button>
            ))}
          </div>

          {/* Menu compacto para mobile */}
          <div className="lg:hidden mb-3">
            <div className="flex items-center space-x-2 bg-white rounded-full p-2 shadow-lg">
              {sections.slice(0, 3).map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-8 h-8 rounded-full transition-all duration-200 flex items-center justify-center text-xs ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  title={section.label}
                >
                  {section.icon}
                </button>
              ))}
              <div className="w-px h-6 bg-gray-200"></div>
              {sections.slice(3).map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-8 h-8 rounded-full transition-all duration-200 flex items-center justify-center text-xs ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  title={section.label}
                >
                  {section.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Botão para voltar ao topo - Melhorado */}
          <button
            onClick={scrollToTop}
            className="relative w-16 h-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group overflow-hidden"
            title="Voltar ao topo"
          >
            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 transition-transform duration-700 group-hover:translate-x-full"></div>
            
            <svg className="w-7 h-7 group-hover:-translate-y-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            
            {/* Círculo de progresso */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white opacity-30">
              <div 
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-300 transition-transform duration-300"
                style={{ 
                  transform: `rotate(${scrollProgress * 3.6}deg)`,
                  borderTopColor: scrollProgress > 90 ? '#10b981' : '#3b82f6'
                }}
              ></div>
            </div>
          </button>

          {/* Indicador de progresso local */}
          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-200 ease-out rounded-full"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

function LandingPage() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <section id="sobre-senai">
        <CardSection />
      </section>
      <SocialMediaSection />
      <section id="eventos-noticias">
        <EventsSection />
      </section>
      <section id="outros-links">
        <LinksSection />
      </section>
      <section id="equipe">
        <InfoSection />
      </section>
      <section id="contato">
        <Footer />
      </section>
      
      {/* Navegação flutuante com scroll suave */}
      <LandingPageFloatingNav />
    </div>
  )
}

export default LandingPage
