# Combat Robots Wiki

An open, community-maintained knowledge base for combat robotics — built with
[Starlight](https://starlight.astro.build) (Astro).

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site -> ./dist
npm run preview    # serve the built site locally
```

## Writing content

Pages are Markdown/MDX files under `src/content/docs/`:

```
src/content/docs/
  index.mdx              landing page
  start-here/            introduction, contributing
  building/             \
  competing/             > new .md files here show up in the sidebar automatically
  reference/            /
```

Sidebar sections are configured in `astro.config.mjs`. The `building/`,
`competing/`, and `reference/` groups auto-generate from their folder contents.

## AI / LLM access

The [`starlight-llms-txt`](https://github.com/HiDeoo/starlight-llms-txt) plugin
generates, at build time:

- `/llms.txt` — index for language models
- `/llms-full.txt` — the entire wiki as one plain-text document
- `/llms-small.txt` — a compact version

Set the real domain in `astro.config.mjs` (`site:`) so these files contain
correct absolute URLs.

## Deploy (free)

Static output in `dist/`. Any static host works. Cloudflare Pages:

- Framework preset: **Astro**
- Build command: `npm run build`
- Output directory: `dist`

Also update the `github` link in `astro.config.mjs` to this repo.
