# Tronitix Website

## Local development

1. Install Node.js.
2. Run `npm install`.
3. Run `npm run dev` and open the local Vite URL.

## Production build

Run `npm run build`. Vite creates the production bundle, then `scripts/prerender-seo.js` generates crawlable HTML for `/`, `/projects/`, and `404.html`. Deploy the complete `dist/` directory and configure the hosting provider to serve `404.html` with an HTTP 404 status.

On Vercel, `vercel.json` permanently redirects `www.tronitix.in` to the canonical `tronitix.in` host (including project paths) and redirects `/projects` to `/projects/`. Add both hostnames to the Vercel project; the host-specific redirect only applies once `www.tronitix.in` points to that project. Netlify uses `public/_redirects` for `/projects`; configure `tronitix.in` as the primary domain in Netlify's Domain management and add `www.tronitix.in` as an alias so Netlify redirects it to the primary domain.

## SEO maintenance

- Page titles, descriptions, canonical URLs, and structured data are maintained in `src/seo.js`.
- The build prerenders each public route with its page content, metadata, and JSON-LD. Keep the prerender step in the production build command.
- `public/robots.txt` points crawlers to `public/sitemap.xml`. Update the sitemap `lastmod` dates when the listed page content changes.
- Social sharing uses `public/og-image.jpg` (1200 × 630).
- After launch, verify the live domain and sitemap in Google Search Console and Bing Webmaster Tools. Keep the verified business name, address, phone, and service area consistent with business listings.
