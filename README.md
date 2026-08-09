# tersawy.com

My personal site. Nuxt 4, statically prerendered, deployed to Deno Deploy.

## Running it

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm generate   # static build → .output/public
pnpm preview
```

Node 24, pnpm 11.

## How it's put together

Four pages — home, work, about, contact — with no CMS and no content collection behind them. At
this size a database of one author writing four pages is overhead, so the copy lives in the
components and changes with a commit.

```text
app/
  app.vue              header + page + footer, and the skip link
  error.vue            404 and everything else, same shell
  assets/css/main.css  the whole design system: tokens, base, three utilities
  components/          SiteHeader · SiteFooter · PageIntro · NumberedRow
  pages/               index · work · about · contact
public/                favicon, robots.txt, sitemap.xml
```

**Design direction — "set in ink".** An editorial treatment: ivory ground, dark ink, one wine
accent that appears exactly twice per page (the italic phrase in a heading, and the marginal
numerals). Newsreader for reading, Archivo for labels. Dark mode is a designed night edition
rather than an inversion — the ground warms toward brown-black so the paper feeling survives and
the accent lifts in lightness so it still holds contrast.

Everything is driven by CSS custom properties declared in a Tailwind v4 `@theme` block, so both
themes are defined at the token layer and no component hard-codes a color.

**Sitemap** is a static file rather than `@nuxtjs/sitemap` — the module currently pulls a
transitive dependency (`@clack/prompts@^1.7.0`) that doesn't resolve, and four fixed routes don't
justify a build-time module. If you add routes, add them to `public/sitemap.xml`.

**No Nitro preset is pinned.** Deno Deploy detects Nuxt and configures Nitro itself; pinning one
here would fight that. Prerendering is preset-independent, so every page ships as static HTML
either way.

**No `packageManager` field either.** With one, pnpm tries to fetch that exact version inside the
Deno Deploy builder, and that download lands broken there — `Module not found .../dist/pnpm.mjs`,
install dead at 2s. Without it the builder's own pnpm runs, and `lockfileVersion: 9.0` is read
happily by pnpm 9, 10 and 11 alike. Pinning Deno's current version instead would only work until
they upgrade it.

## Deploying

The repository is linked to a Deno Deploy project, which builds and deploys on push to `main`.
DNS lives at Cloudflare and points at Deno Deploy.

## License

Code is MIT. The writing and the design are mine — please don't ship your own site as a copy of
this one.
