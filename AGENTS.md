# tersawy.com — agent guide

**This is the single source of truth for agent guidance**, shared by every agent (Claude Code,
Codex, Cursor, …). `CLAUDE.md` imports this file instead of duplicating it. Keep durable guidance
here, and update it in the same change as the code.

This directory is Mohamed Tersawy's personal site. It is **not** work for an employer — do not
apply the Golify repo's conventions, branch rules, or promotion flow here.

## What this is

A four-page personal site — home, work, about, contact — at <https://tersawy.com>. Its job is to
answer "is this person any good?" for someone who arrived from a CV, a LinkedIn profile, or a
GitHub link, in about thirty seconds.

| | |
| --- | --- |
| Stack | Nuxt 4 · Vue 3 · Tailwind 4 (`@tailwindcss/vite`) · `@nuxt/fonts` |
| Package manager | pnpm (Node 24). `pnpm dev`, `pnpm generate`, `pnpm preview` |
| Output | Fully prerendered — `.output/public` |
| Hosting | Deno Deploy, auto-deploying from `Tersawy/tersawy.com` on push to `main` |
| DNS | Cloudflare → Deno Deploy. Already wired; a 404 means no deployment is attached, not a DNS fault |
| Content | Lives in the components. No CMS, no content collection — one author, four pages |

## Related places

- **`~/projects/tersawy`** — the `Tersawy/tersawy` profile README repo. Renders at the top of the
  GitHub profile. Keep it consistent with this site, but never duplicate the GitHub bio/location
  fields, which render directly above it on the same screen.
- **`~/projects/CVs/cvpendingedits.md`** — the CV lives in Figma
  (file `lrnmmtJb3iEc1piy0XZW8w`, v2 frames `217:2` and `220:2`). That file holds the pending
  edits, the node ids, and a ready-to-run `use_figma` script.

## Design direction — "set in ink"

An editorial treatment. Change it only deliberately.

- **Palette** — ivory ground `#F8F7F4`, ink `#16130F`, muted `#6E675C`, rule `#D9D4C8`, and one
  wine accent `#6E2F3F` that appears at most twice per page: the italic phrase in a heading, and
  the marginal numerals. Dark mode is a designed night edition, not an inversion — the ground
  warms toward brown-black so the paper feeling survives, and the accent lifts in lightness.
- **Type** — Newsreader for reading, Archivo for labels. Self-hosted at build time by
  `@nuxt/fonts`; nothing is fetched from Google at runtime.
- **Structure** — asymmetric two-column intros, hairline rules, numerals in the margin. The
  numbering is real: those items read in sequence. Don't add numbered markers to lists that
  aren't sequences.
- **Tokens** — every colour is a CSS custom property in the `@theme` block in
  `app/assets/css/main.css`. No component hard-codes a colour, and neither should yours.

## Writing rules — these were learned the hard way

1. **Lead with the capability, not the employer's product.** "I build and run **Golify** …" as an
   opening asks the reader to be impressed by a name that carries no recognition. What he can do
   comes first; Golify is the evidence, not the headline.
2. **The site is his, not his employer's.** Golify is the biggest item on `/work` because it is
   the most recent and deepest, but the site must survive him changing jobs. Cyber Sky and the
   freelance years stay.
3. **No vanity metrics.** Commit counts, lines of code, and "authored N% of the codebase" read as
   inexperience to a senior reviewer. Scope and outcomes, never volume.
4. **Name the capability, not the technique.** "Moved money to Decimal128" claims knowledge of a
   data type any senior backend engineer already has. "Changed the storage type under a live
   multi-tenant system with no maintenance window" claims the thing that is actually hard.
5. **Don't repeat what the surface already shows.** The GitHub bio renders directly above the
   profile README; the footer already carries the location. Say it once per screen.
6. **Claims must be defensible in an interview.** Every sentence here should survive "how?".
   Before writing a number or a superlative, check it against the source — the Golify repo's
   `git log`, `docs/`, and `README.md` are the record.

## Traps already paid for

- **`@theme` inside a media query does not work.** Tailwind 4 evaluates `@theme` at build time and
  hoists it out of any at-rule, so a dark palette written that way applies unconditionally and the
  light theme never renders. Override the custom properties on plain `:root` inside the media
  query instead.
- **No `packageManager` field in `package.json`.** With one, pnpm tries to fetch that exact
  version inside the Deno Deploy builder and the download lands broken —
  `Module not found …/dist/pnpm.mjs`, install dead in 2s. Without it the builder's own pnpm runs,
  and `lockfileVersion: 9.0` is read happily by pnpm 9, 10 and 11. Pinning Deno's current version
  instead only works until they upgrade it.
- **pnpm 11 needs `allowBuilds` in `pnpm-workspace.yaml`**, not `onlyBuiltDependencies` in
  `package.json` (silently ignored, with a warning) and not `pnpm.onlyBuiltDependencies`. esbuild
  needs its postinstall or Vite will not start.
- **`@nuxtjs/sitemap` does not install** — it pulls `@clack/prompts@^1.7.0`, which does not exist.
  The sitemap is a static file in `public/`. If you add a route, add it there too.
- **Don't pin a Nitro preset.** Deno Deploy detects Nuxt and configures Nitro itself. Prerendering
  is preset-independent, so pages ship as static HTML either way.

## Verify visually before claiming it works

A green build is not evidence the page is right. Three of the bugs above shipped a passing build
and a broken page. Serve `.output/public`, screenshot it in **both** colour schemes, and read it.

## Language

The site, the repo, commits, and all written English are in English. Conversation with the
operator is in Egyptian Arabic, addressing him with masculine forms.
