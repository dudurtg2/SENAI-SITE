import React from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import CardSection from './components/Cards/CardSection'
import SocialMediaSection from './components/SocialMedia/SocialMediaSection'
import EventsSection from './components/Events/EventsSection'
import LinksSection from './components/Links/LinksSection'
import InfoSection from './components/Info/InfoSection'
import Footer from './components/Footer/Footer'

function LandingPage() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <CardSection />
      <SocialMediaSection />
      <EventsSection />
      <LinksSection />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default LandingPage
