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
import { createStructuredData, pageMetadata } from './seo'

const getRoute = () => window.location.pathname.replace(/\/+$/, '') || '/'

function App({ initialRoute } = {}) {
  const [filter, setFilter] = useState('All')
  const [route, setRoute] = useState(initialRoute ?? getRoute)

  useEffect(() => {
    const onPop = () => setRoute(getRoute())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    const metadata = pageMetadata[route]
    const isNotFound = !metadata
    const title = metadata?.title ?? 'Page Not Found | Tronitix'
    const description = metadata?.description ?? 'The page you requested could not be found on Tronitix.'
    const canonicalUrl = metadata?.canonical

    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
    if (canonicalUrl) {
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    } else {
      document.querySelector('meta[property="og:url"]')?.removeAttribute('content')
      document.querySelector('link[rel="canonical"]')?.remove()
    }

    document.querySelector('meta[name="robots"]')?.setAttribute('content', isNotFound ? 'noindex, follow' : 'index, follow')
    if (isNotFound) {
      document.getElementById('structured-data')?.remove()
    } else {
      let structuredData = document.getElementById('structured-data')
      if (!structuredData) {
        structuredData = document.createElement('script')
        structuredData.id = 'structured-data'
        structuredData.type = 'application/ld+json'
        document.head.appendChild(structuredData)
      }
      structuredData.textContent = JSON.stringify(createStructuredData(route, products, services))
    }

    if (route !== '/') {
      document.getElementById('main-content')?.focus()
      window.scrollTo(0, 0)
    }
  }, [route])

  const navigate = (path) => {
    const nextRoute = path.replace(/\/+$/, '') || '/'
    if (nextRoute === route) return
    window.history.pushState({}, '', path)
    setRoute(nextRoute)
  }

  return (
    <div>
      <Header route={route} navigate={navigate} />
      <main id="main-content" tabIndex="-1">
        {route === '/' && (
          <>
            <Hero />
            <About />
            <Products products={products} filter={filter} setFilter={setFilter} navigate={navigate} />
            <Services services={services} />
            <Capabilities capabilityItems={capabilityItems} />
            <Process processSteps={processSteps} />
            <Team team={team} />
            <Contact />
          </>
        )}

        {route === '/projects' && (
          <ProjectsPage products={products} navigate={navigate} />
        )}

        {route !== '/' && route !== '/projects' && (
          <section className="section not-found">
            <div className="container">
              <span className="eyebrow">404 · PAGE NOT FOUND</span>
              <h1>We couldn’t find that page.</h1>
              <p>Let’s get you back to the good stuff.</p>
              <a className="btn" href="/">Back to home</a>
            </div>
          </section>
        )}
      </main>
      <Footer route={route} />
    </div>
  )
}

export default App
