const siteUrl = 'https://tronitix.in'

export const pageMetadata = {
  '/': {
    title: 'Hardware, IoT & Software Engineering in Tamil Nadu | Tronitix',
    description: 'Tronitix engineers custom hardware, embedded systems, IoT products and software in Tamil Nadu, taking ideas from concept to tested prototype.',
    canonical: `${siteUrl}/`
  },
  '/projects': {
    title: 'Hardware, IoT & Software Projects | Tronitix',
    description: 'Explore Tronitix engineering projects, from embedded hardware and connected IoT prototypes to custom software and AI-assisted systems.',
    canonical: `${siteUrl}/projects/`
  }
}

export function createStructuredData(route, products, services) {
  const isProjectsPage = route === '/projects'
  const canonical = pageMetadata[route]?.canonical ?? `${siteUrl}/`
  const title = pageMetadata[route]?.title ?? pageMetadata['/'].title
  const description = pageMetadata[route]?.description ?? pageMetadata['/'].description

  const organization = {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Tronitix',
    url: `${siteUrl}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.png`,
      width: 113,
      height: 114
    },
    email: 'tronitix.official@gmail.com',
    telephone: '+91 9489309512',
    description: 'Tronitix engineers custom hardware, embedded systems, IoT products and software in Tamil Nadu.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '39 E/3-2, Faith Complex, Anandan Nagar, Medical College Road, Ranithottam',
      addressLocality: 'Nagercoil',
      addressRegion: 'Tamil Nadu',
      postalCode: '629001',
      addressCountry: 'IN'
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Tamil Nadu, India'
    },
    knowsAbout: [
      'Hardware prototyping',
      'Embedded systems',
      'Internet of Things',
      'Custom software development',
      'Robotics',
      'Product engineering'
    ],
    ...(services?.length ? {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Engineering and technology services',
        itemListElement: services.map(([name, serviceDescription]) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name,
            description: serviceDescription,
            provider: { '@id': `${siteUrl}/#organization` }
          }
        }))
      }
    } : {})
  }

  const webpage = {
    '@type': isProjectsPage ? 'CollectionPage' : 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#organization` },
    inLanguage: 'en-IN',
    ...(isProjectsPage ? {
      mainEntity: {
        '@type': 'ItemList',
        name: 'Tronitix engineering projects',
        numberOfItems: products.length,
        itemListElement: products.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.title,
            description: project.text,
            genre: project.category,
            creator: { '@id': `${siteUrl}/#organization` }
          }
        }))
      }
    } : {})
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: 'Tronitix',
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en-IN'
      },
      webpage
    ]
  }
}
