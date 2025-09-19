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

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      setIsVisible(scrolled > 300)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Chamada inicial
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Botão "Voltar ao topo" simples */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}>
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
          title="Voltar ao topo"
        >
          <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
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
