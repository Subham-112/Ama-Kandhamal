import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import ImpactNumbers from './components/ImpactNumbers'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import MobileApp from './components/MobileApp'
import Testimonials from './components/Testimonials'
import FoundersTeam from './components/FoundersTeam'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChooseUs />
      <ImpactNumbers />
      <HowItWorks />
      <Services />
      <MobileApp />
      <Testimonials />
      <FoundersTeam />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
