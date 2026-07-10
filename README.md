# Portfolio Scaffold (Astro + Tailwind)

## What's here
- `src/content/projects/` — one markdown file per project (content collection,
  schema in `src/content/config.ts`). Add a new project by dropping in a new
  `.md` file — no code changes needed.
- `src/components/` — Header, Hero, About, ProjectCard, Footer.
- `src/pages/index.astro` — homepage, pulls projects from the collection.
- `src/pages/projects/[slug].astro` — auto-generated full writeup page per project.
- `tailwind.config.mjs` — dark theme, indigo/purple accent, custom font stack.

## Setup
```bash
npm install
npm run dev        # local dev server
npm run build       # production build → dist/
npm run preview     # preview the production build locally
```

## Before going live
- [ ] Add real `liveUrl` values once each project is deployed
- [ ] Add real GitHub repo URLs (currently placeholder `your-username`)
- [ ] Add a `resume.pdf` to `public/`
- [ ] Add project cover images to `public/projects/`
- [ ] Fill in the "Challenges" section in each project's `.md` file with a
      real, specific story — this is the highest-leverage content on the site
- [ ] Update social links in `Footer.astro` and `Hero.astro`
- [ ] Add real fonts (Space Grotesk / Inter / JetBrains Mono are referenced in
      the Tailwind config — pull them in via Google Fonts or self-host)
- [ ] Update `site` URL in `astro.config.mjs` once deployed
- [ ] Run `npm run build` locally before every deploy to catch schema/type errors early

## Deploy
Push to GitHub, then connect the repo in Vercel or Netlify — both auto-detect
Astro and deploy on every push with zero config.
