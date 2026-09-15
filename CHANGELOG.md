# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Changed

- Replaced the full Astro website (blog, marketing pages, DecapCMS, etc.) with a single static
  `index.html` landing page showing "Zoef.app BV". Removed all Astro/Tailwind/DecapCMS tooling
  and dependencies since the site no longer has a build step.
- Reintroduced a minimal Astro (7.3.2) project with a single `src/pages/index.astro` page
  rendering "Zoef.app BV", so Vercel's existing "Astro" framework preset / `astro build`
  command keep working without needing dashboard changes. Pinned `node`/`pnpm` via `mise.toml`.
