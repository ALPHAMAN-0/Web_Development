---
tags: [claude, Web_Development]
---
- This repo holds 3 independent mini-projects (LogIn Page, Restaurant Website/foodio, VPS Production/Server), each with its own package.json — cd into the right one before running commands.

## Build / run
- LogIn Page backend: `node backend/server.js` (from `LogIn Page/`) — no npm scripts defined besides a placeholder `test`.
- Foodio dev: `npm run dev` (from `Restaurant Website/foodio/`) — runs `next dev`.
- Foodio build: `npm run build` (from `Restaurant Website/foodio/`) — runs `next build`.
- Foodio start: `npm start` (from `Restaurant Website/foodio/`) — runs `next start`.
- VPS Production Server start: `npm start` (from `VPS Production/Server/`) — runs `node index.js`.

## Rules observed
- `LogIn Page/backend/server.js` is CommonJS (`require`); `VPS Production/Server/index.js` is ESM (`"type": "module"` in its package.json) — don't mix syntax when editing either.

## Read first
1. `README.md` — describes the 3 sub-projects and how to run each.
2. `Restaurant Website/foodio/app/layout.tsx` — Foodio root layout (fonts, CartProvider).
3. `VPS Production/Server/index.js` — Express server pattern reused across the repo's backends.

Architecture: see ARCHITECTURE.md — read before structural changes
