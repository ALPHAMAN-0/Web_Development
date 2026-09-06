# CLAUDE.md — Web-Development

- Foodio (`Restaurant Website/foodio/`): `npm run dev` (Next.js dev), `npm run build`, `npm run start` (from its `package.json` scripts).
- VPS Production Server (`VPS Production/Server/`): `npm start` runs `node index.js` (from its `package.json` scripts).
- LogIn Page backend (`LogIn Page/`): no npm scripts defined besides a placeholder `test`; run with `node backend/server.js`.
- `VPS Production/Server/index.js` uses ESM (`"type": "module"` in its package.json) — use `import`, not `require`, in that project.
- `LogIn Page/backend/server.js` uses CommonJS (`require`) — do not mix module syntax there.
- Three independent sub-projects with separate `package.json`/lockfiles — install and run each from its own directory, not the repo root.

Files worth reading first:
- `README.md`
- `Restaurant Website/foodio/package.json`
- `Restaurant Website/foodio/app/page.tsx`

Architecture: see ARCHITECTURE.md — read before structural changes
