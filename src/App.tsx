import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import TechStack from './components/TechStack'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}