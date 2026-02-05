# SEO in Sydney

Static website for SEO services in Sydney, built with Eleventy (11ty).

## Tech Stack

- **Static Site Generator:** Eleventy (11ty)
- **Templates:** Nunjucks
- **Hosting:** Netlify
- **CSS:** Mobile-first, minimal custom CSS
- **JavaScript:** Minimal, deferred loading

## Project Structure

```
seoinsydney/
├── src/
│   ├── _data/          # Global data files
│   │   ├── site.json   # Site configuration
│   │   ├── suburbs.json # Suburb data
│   │   └── services.json # Service data
│   ├── _includes/      # Partial templates
│   │   └── partials/
│   ├── _layouts/       # Page layouts
│   ├── assets/         # Images and static files
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── *.njk           # Page templates
├── .eleventy.js        # Eleventy configuration
├── netlify.toml        # Netlify configuration
└── package.json        # Dependencies and scripts
```

## Build Commands

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run serve
```

Starts a local development server at `http://localhost:8080` with hot reloading.

### Production Build

```bash
npm run build
```

Generates the static site in the `_site` directory.

### Clean Build

```bash
npm run clean
```

Removes the `_site` directory.

## Deployment

The site is configured for deployment on Netlify:

1. Connect the GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `_site`

Netlify will automatically deploy on push to the `main` branch.

## Pages

### Core Pages

- `/` - SEO Sydney (homepage)
- `/local-seo` - Local SEO services
- `/web-design` - Web design services
- `/aeo` - Answer Engine Optimisation
- `/geo` - Generative Engine Optimisation

### Support Pages

- `/about` - About page
- `/contact` - Contact page
- `/privacy` - Privacy policy
- `/terms` - Terms of service

### Suburb Pages

- `/parramatta`
- `/surry-hills`
- `/north-sydney`
- `/bondi`
- `/newtown`
- `/chatswood`
- `/pyrmont`
- `/marrickville`
- `/alexandria`

## Technical SEO

- Canonical URLs on all pages
- XML sitemap at `/sitemap.xml`
- robots.txt at `/robots.txt`
- JSON-LD schema markup (Organization, LocalBusiness, Service, BreadcrumbList, FAQPage)
- 404 error page

## Performance

Target metrics:
- Lighthouse Performance ≥ 90
- Lighthouse Accessibility ≥ 90
- Lighthouse Best Practices ≥ 90
- Lighthouse SEO ≥ 90

## Contact

Phone: 0400 454 859
Email: hello@seoinsydney.com
Website: https://seoinsydney.com
