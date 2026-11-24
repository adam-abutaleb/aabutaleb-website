# CLAUDE.md — Personal Portfolio Website

This file tells Claude Code how to work in this repo. Read it fully at the start of every session.

## What this is

A static personal portfolio site for a CS & Mathematics double major. Its job is to get the owner interviews for software engineering internships now, and quantitative finance roles later. Everything is judged against that goal.

**Primary audience:** recruiters, engineers and quant hiring managers who spend about 30 seconds on it. If a page does not make sense in 30 seconds, it is wrong.

## Stack (non-negotiable unless I say otherwise)

- **Astro** (static output only) + **Tailwind CSS v4** via `@tailwindcss/vite`. Versions are pinned exactly in `package.json`; don't bump them without telling me.
- Astro ships zero client JS by default. Keep it that way. No UI framework integrations (React, Vue, Svelte) and no client islands unless a feature genuinely needs interactivity, and explain why first.
- No other npm dependencies without asking. Every dependency is a liability on a site this small.
- **OneDrive warning:** `node_modules`, `dist` and `.astro` must never sync. Keep the repo outside OneDrive (preferred), or exclude those folders from sync. They are in `.gitignore`.
- Deploys as plain static files from `dist/` (GitHub Pages / Netlify / Vercel static). No SSR, no adapters, no server code.
- Modern evergreen browsers only.

Commands: `npm install`, `npm run dev` (localhost:4321), `npm run build` (outputs `dist/`), `npm run preview`.

## Theme

Swimming pools, applied as a light visual layer: pool-floor tile grid in the hero, lane-rope dividers, a black lane-line accent on project cards, depth-marker tiles for section numbers, and a deep-water / pool-blue / rope-red palette. The theme must never cost clarity: nav labels, headings and copy stay plain and professional ("Projects", not "Lanes"). Puns are allowed only on the 404 page and in small decorative labels.

## Suggested structure

```
/
├── src/
│   ├── pages/                # one .astro file per route
│   │   ├── index.astro       # home: hero, featured work, results, contact
│   │   ├── about.astro
│   │   ├── 404.astro
│   │   └── projects/
│   │       ├── index.astro   # all projects
│   │       └── [id].astro    # case study page, rendered from content
│   ├── content/projects/     # one Markdown file per project
│   ├── content.config.ts     # project frontmatter schema
│   ├── components/           # Header, Footer, ProjectCard, SectionHeading, ContactLinks
│   ├── layouts/Base.astro    # <head>, meta/OG tags, skip link, header, footer
│   ├── data/site.ts          # name, tagline, contact links: the ONLY place these live
│   └── styles/global.css     # Tailwind import, @theme tokens, the few custom classes
├── public/                   # copied as-is: favicon.svg, og.png, robots.txt, resume.pdf
├── astro.config.mjs
├── package.json
├── CLAUDE.md
└── README.md
```

Do not restructure this without telling me why first.

## Principles

1. **Content beats decoration.** A boring site with clear, specific project write-ups beats a flashy one with vague copy. Never trade clarity for animation.
2. **Semantic, accessible HTML first.** Real landmarks (`header`, `nav`, `main`, `footer`), proper heading order, alt text, visible focus states, keyboard navigation, sufficient contrast (WCAG AA minimum). The built site must be fully usable with JS disabled.
3. **Mobile-first, responsive.** Recruiters open links on phones. Design for small screens first, then scale up. No horizontal scrolling at any width.
4. **Fast.** Target Lighthouse 95+ in all four categories. Use `<Image />` from `astro:assets` for images in `src/` (it outputs sized WebP/AVIF). Avoid layout shift. System fonts or one self-hosted font at most.
5. **Tailwind, used with discipline.** Colors and fonts are defined once as tokens in the `@theme` block of `src/styles/global.css` (`deep`, `pool`, `shallow`, `tile`, `rope`, `grout`). Use those tokens, never raw hex values or arbitrary colors in markup. When a utility string repeats across files, make it a component instead of copy-pasting. Custom CSS only for what utilities can't express (the tile and lane-rope backgrounds). No `!important`, no `style=""`.
6. **Small, readable code.** TypeScript in component frontmatter, `const` by default, no globals. Any client JS goes in a `<script>` inside the component that needs it. Comment the *why*, not the *what*.
7. **Consistency over cleverness.** Reuse existing components and variables before inventing new ones.

## Content rules (important)

- **Never fabricate.** Do not invent projects, metrics, job titles, coursework, awards, quotes or links. If real content is missing, insert an obvious placeholder like `TODO(content): ...` and tell me what you need.
- **Be specific.** Project write-ups should state the problem, what I built, the tech used, one or two concrete results or lessons, and links to the repo and demo. Avoid filler like "passionate", "innovative", "cutting-edge", "leveraging".
- **Quant/math credibility:** where relevant, show rigor (correct math, clear assumptions, honest limitations) rather than buzzwords. If a project claims a result, it must be reproducible or clearly caveated.
- **Contact info and links** (email, GitHub, LinkedIn, resume) live only in `src/data/site.ts`. A `null` value is hidden, so no broken links ship. Ask me before adding any personal data I have not given you.
- **Projects** are Markdown files in `src/content/projects/`. Keep `confirmed: false` until I approve a project; the site labels unconfirmed ones visibly.
- Likely portfolio candidates (confirm with me before featuring any): T-Dex, the personal finance analyzer, the hackathon project, competitive programming and math competition results.

## How to work

1. **Plan before large changes.** For anything touching multiple files or the design direction, give me a short plan first and wait for approval. Small fixes: just do them.
2. **Ask when ambiguous, but don't stall.** One concise question, with your recommended default.
3. **Small, focused changes.** One concern per change. Don't reformat unrelated code or rename things "while you're there".
4. **Read before editing.** Check existing files and conventions first. Match what's there.
5. **Verify your work.** After changes, run `npm run build` (must pass cleanly), then open the page via `npm run preview` (preview/browser) and check: layout at ~375px, ~768px and ~1280px wide; no console errors; links resolve; keyboard tab order is sane. Say what you checked and what you could not check. Do not claim something works if you didn't run it.
6. **Git hygiene (once a repo exists).** Small commits with imperative messages ("Add project card grid"). Never commit secrets, `.env` files or large unoptimized assets. Do not force-push or rewrite history without asking.
7. **Be honest.** If a design or content choice I request will hurt the site's goal, say so directly and explain why before doing it.

## Definition of done

- Renders correctly at mobile, tablet and desktop widths
- No console errors or broken links/images
- Passes basic accessibility checks (headings, alt text, focus, contrast)
- `npm run build` passes; HTML validates; no unused components, tokens or dead code
- Images optimized and sized; no layout shift
- Meta tags set (title, description, Open Graph, favicon) on every page
- No placeholder text left unless marked `TODO(content)` and reported to me

## Don'ts

- Don't add Astro integrations, UI frameworks, Tailwind plugins or other dependencies unprompted
- Don't use lorem ipsum in anything meant to ship
- Don't add autoplaying media, heavy parallax, cookie banners or trackers
- Don't hotlink images or scripts you don't control without telling me
- Don't write long explanations when a short one works
