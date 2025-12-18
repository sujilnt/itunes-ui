# Itunes UI

React + TypeScript + Vite front-end for browsing iTunes search results. Uses Material UI for layout/components and Redux Toolkit for state.

## Tech Stack
- React 19 + TypeScript
- Vite
- Material UI
- Redux Toolkit + React Redux
- OpenAPI-generated API client (typescript-fetch)

## Prerequisites
- Node.js ≥ 18 (LTS recommended)
- npm

## Project Setup
1) Install dependencies  
```bash
npm install
```

2) Run the app in dev mode (with HMR)  
```bash
npm run dev
```
App starts at the URL printed by Vite (typically http://localhost:5173).

3) Lint the code  
```bash
npm run lint
```

4) Build for production  
```bash
npm run build
```

5) Preview the production build locally  
```bash
npm run preview
```

## Optional: API generation
The OpenAPI client can be regenerated from `api_specs/openApi.yml`:
```bash
npm run openapi
```
This will overwrite the generated client in `src/api`.

## Optional: Server commands
If you use the bundled server (inside `/server`):
```bash
npm run server:dev      # start server in dev mode
npm run server:build    # build server
npm run server:preview  # preview built server
```

## Project Structure (high level)
- `src/pages/Home` — Itunes gallery page
- `src/features` — Redux slices/tests
- `src/hooks` — Custom hooks (e.g., intersection observer)
- `src/api` — Generated API client
- `src/components` — Reusable UI pieces

## Notes
- The React Compiler is enabled (via `babel-plugin-react-compiler`).
- Material UI uses the bundled Roboto font (@fontsource/roboto).***
