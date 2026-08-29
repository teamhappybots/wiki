---
title: Contributing
description: How to add and edit pages on the Combat Robots Wiki.
sidebar:
  order: 2
---

Every page is a Markdown file in `src/content/docs/`. To contribute:

1. Fork the repository.
2. Add or edit a `.md` file in the relevant folder (`building/`, `competing/`, `reference/`).
3. Open a pull request.

## Page format

Each file starts with frontmatter:

```md
---
title: Brushless drive motors
description: One-line summary for search results and social cards.
---

Page content in Markdown...
```

New folders appear in the sidebar automatically if their parent section uses
`autogenerate` in `astro.config.mjs`.

## Style

- Write for someone building their first robot in that weight class.
- Prefer tables and lists over long paragraphs.
- Cite rulesets and sources with links.
- Keep vendor mentions neutral; this is not a marketplace.

## Local preview

```bash
npm install
npm run dev
```
