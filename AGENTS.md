<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Deployment Learnings (Jul 26, 2026)

### Wrangler 4.x Issue
- Wrangler 4.x ka C3 auto-setup `@lovable.dev/vite-tanstack-config` ko samajh nahi pata kyunke yeh standard Vite `defineConfig({ plugins: [] })` pattern follow nahi karta
- Auto-detection se bachne ke liye: `--autoconfig false`
- Wrangler ko exact config batane ke liye: `--config .output/server/wrangler.json`
- Final deploy command: `npx wrangler deploy --config .output/server/wrangler.json --autoconfig false`

### Build Output (.output/)
- `.output/public/` — static assets (CSS, JS, images, PDFs) served via Cloudflare CDN
- `.output/server/index.mjs` — Cloudflare Worker SSR script
- `.output/server/wrangler.json` — Nitro-generated wrangler config with correct paths
- Build process: `vite build` (client + SSR) → Nitro bundles for Cloudflare Workers

### Nav Arrays
- Two separate nav arrays exist — `navItems` in `portfolio-data.tsx` (used by SiteHeader on inner pages) and `navLinks` in `index.tsx` (used by home page header) — must keep both in sync

