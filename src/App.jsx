import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import HowItWorksSection from './components/HowItWorksSection'
import FaqSection from './components/FaqSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-transparent text-mist">
      <Header />

      <main id="home">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HowItWorksSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
