# PD Enterprise

Empowering students with innovative software tools that simplify learning.

PD Enterprise is a web application built with [SvelteKit 2](https://kit.svelte.dev/) and [TypeScript](https://www.typescriptlang.org/), styled with [Tailwind CSS v4](https://tailwindcss.com/) and [daisyUI](https://daisyui.com/). It serves as a central hub for student-focused educational tools.

## Products

- **Grade AI** — AI-powered learning assistant (coming soon)
- **cnotes** — Collaborative note-taking platform ([cnotes.pages.dev](https://cnotes.pages.dev))
- More innovative apps launching soon

## Tech Stack

| Tool | Purpose |
|---|---|
| [SvelteKit 2](https://kit.svelte.dev/) | Full-stack web framework (Svelte 5 with runes) |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS framework |
| [daisyUI](https://daisyui.com/) | Tailwind CSS component library |
| [Iconify](https://iconify.design/) | Icon library |
| [Auth0](https://auth0.com/) | Authentication (planned) |
| [Bun](https://bun.sh/) | Package manager & runtime |

## Backend

The frontend communicates with a Cloudflare Workers API:

- **Dev:** `http://127.0.0.1:8787/`
- **Prod:** `https://backend-service.pdenterprise314.workers.dev/`

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Available Scripts

| Script | Description |
|---|---|
| `dev` | Start development server |
| `build` | Production build |
| `preview` | Preview production build |
| `check` | Type check with svelte-check |
| `check:watch` | Type check in watch mode |
| `lint` | Lint with Prettier & ESLint |
| `format` | Auto-format with Prettier |

## Project Structure

```
src/
├── lib/
│   ├── assets/          # Static assets (favicon)
│   ├── stores/          # Svelte stores (theme, modal)
│   ├── utils/           # Utilities (API config, date format, cookies, toasts)
│   └── index.ts         # Barrel exports
├── routes/
│   ├── +error.svelte    # Custom error page
│   ├── +layout.svelte   # Root layout
│   ├── +page.svelte     # Landing page
│   ├── blog/            # Blog listing & individual posts
│   ├── components/      # Shared UI components
│   ├── images/          # Image assets
│   └── products/
│       ├── cnotes/      # cnotes product page
│       └── grade-ai/    # Grade AI product page
└── app.html             # HTML shell
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_AUTH_DOMAIN=your-auth0-domain
VITE_AUTH_CLIENT_ID=your-auth0-client-id
```

## Deployment

The project uses `@sveltejs/adapter-auto`, which auto-detects the deployment target (Vercel, Netlify, Cloudflare Pages, etc.). Run `bun run build` and deploy the output directory.

## License

All rights reserved. Built for the PD Enterprise platform.
