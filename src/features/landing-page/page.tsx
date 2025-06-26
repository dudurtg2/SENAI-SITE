import React from 'react'
import { useSmoothScroll } from '../../hooks/use-smooth-scroll'
import '../../styles/navigation.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import CardSection from './components/Cards/CardSection'
import SocialMediaSection from './components/SocialMedia/SocialMediaSection'
import EventsSection from './components/Events/EventsSection'
import LinksSection from './components/Links/LinksSection'
import InfoSection from './components/Info/InfoSection'
import Footer from './components/Footer/Footer'

function LandingPage() {
  // Aplicar scroll suave para navegação
  useSmoothScroll()

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
    </div>
  )
}

export default LandingPage
