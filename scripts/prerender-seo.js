import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outputDirectory = path.join(root, 'dist')
const routes = ['/', '/projects']

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function replaceMetaContent(html, id, value) {
  const pattern = new RegExp(`(<meta\\b(?=[^>]*\\bid="${id}")[^>]*\\bcontent=")[^"]*(")`, 'i')
  if (!pattern.test(html)) throw new Error(`Missing metadata element: ${id}`)
  return html.replace(pattern, `$1${escapeAttribute(value)}$2`)
}

function replaceCanonical(html, canonical) {
  const pattern = /(<link\b(?=[^>]*\bid="canonical-url")[^>]*\bhref=")[^"]*(")/i
  if (!pattern.test(html)) throw new Error('Missing canonical link')
  return html.replace(pattern, `$1${escapeAttribute(canonical)}$2`)
}

function createPage(template, route, markup, metadata, structuredData) {
  let html = template
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(metadata.title)}</title>`)
  html = replaceMetaContent(html, 'meta-description', metadata.description)
  html = replaceMetaContent(html, 'og-title', metadata.title)
  html = replaceMetaContent(html, 'og-description', metadata.description)
  html = replaceMetaContent(html, 'twitter-title', metadata.title)
  html = replaceMetaContent(html, 'twitter-description', metadata.description)
  html = replaceMetaContent(html, 'og-url', metadata.canonical)
  html = replaceCanonical(html, metadata.canonical)
  html = html.replace(
    /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="structured-data" type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<', '\\u003c')}</script>`
  )

  if (!html.includes('<div id="root"></div>')) throw new Error(`Missing root mount element for ${route}`)
  const hydrationMarkup = markup.replace(/<link rel="preload"[^>]*\/?>/gi, '')
  html = html.replace('<div id="root"></div>', `<div id="root">${hydrationMarkup}</div>`)
  return html
}

const server = await createServer({
  configFile: path.join(root, 'vite.config.js'),
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true }
})

try {
  const [{ default: App }, siteData, seo] = await Promise.all([
    server.ssrLoadModule('/src/App.jsx'),
    server.ssrLoadModule('/src/data/siteData.js'),
    server.ssrLoadModule('/src/seo.js')
  ])
  const template = await readFile(path.join(outputDirectory, 'index.html'), 'utf8')

  for (const route of routes) {
    const metadata = seo.pageMetadata[route]
    const markup = renderToString(createElement(App, { initialRoute: route }))
    const structuredData = seo.createStructuredData(route, siteData.products, siteData.services)
    const html = createPage(template, route, markup, metadata, structuredData)
    const destination = route === '/'
      ? path.join(outputDirectory, 'index.html')
      : path.join(outputDirectory, 'projects', 'index.html')

    await mkdir(path.dirname(destination), { recursive: true })
    await writeFile(destination, html)
  }

  const notFoundMarkup = renderToString(createElement(App, { initialRoute: '/not-found' }))
  const notFoundMetadata = {
    title: 'Page Not Found | Tronitix',
    description: 'The page you requested could not be found on Tronitix.',
    canonical: `${seo.pageMetadata['/'].canonical}`
  }
  let notFoundHtml = createPage(
    template,
    '/not-found',
    notFoundMarkup,
    notFoundMetadata,
    {}
  )
  notFoundHtml = notFoundHtml
    .replace(/<link\b(?=[^>]*\bid="canonical-url")[^>]*>/i, '')
    .replace(/<meta\b(?=[^>]*\bid="og-url")[^>]*>/i, '')
    .replace(/<meta name="robots" content="index, follow"\s*\/?>/i, '<meta name="robots" content="noindex, follow" />')
    .replace(/<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/i, '')
  await writeFile(path.join(outputDirectory, '404.html'), notFoundHtml)
} finally {
  await server.close()
}
