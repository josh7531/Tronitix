import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import ProjectsPage from './components/ProjectsPage'
import Services from './components/Services'
import Capabilities from './components/Capabilities'
import Process from './components/Process'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { products, services, team, capabilityItems, processSteps } from './data/siteData'

function App() {
  const [filter, setFilter] = useState('All')
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Thank you! Your message has been received. Connect EmailJS or your backend to send it automatically.')
  }

  const [route, setRoute] = useState(window.location.pathname)

  // keep route in sync with browser navigation
  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    const isProjectsPage = route === '/projects'
    document.title = isProjectsPage
      ? 'Projects | Tronitix'
      : 'Tronitix | Hardware, Software & IoT Innovation'

    const description = isProjectsPage
      ? 'Explore Tronitix hardware, software, IoT and AI projects.'
      : 'Tronitix builds integrated hardware, software, IoT and AI solutions, from engineering prototypes to connected digital products.'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://tronitix.in${window.location.pathname}`)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `https://tronitix.in${window.location.pathname}`)
  }, [route])

  const navigate = (path) => {
    if (path === route) return
    window.history.pushState({}, '', path)
    setRoute(path)
  }

  return (
    <div>
      <Header />
      <main>
        {route === '/' && (
          <>
            <Hero />
            <About />
            <Products products={products} filter={filter} setFilter={setFilter} navigate={navigate} />
            <Services services={services} />
            <Capabilities capabilityItems={capabilityItems} />
            <Process processSteps={processSteps} />
            <Team team={team} />
            <Contact formStatus={formStatus} handleSubmit={handleSubmit} />
          </>
        )}

        {route === '/projects' && (
          <ProjectsPage products={products} navigate={navigate} />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
