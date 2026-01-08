# Social Media Feed (Nested Comments)

A small Vite + React + Tailwind CSS example that visualizes a post with nested comments. Indentation (`ml-*` classes) conveys comment hierarchy for training models to recognize parent/child relationships.

## Setup

1. Install deps:
   ```sh
   npm install
   ```
2. Run dev server:
   ```sh
   npm run dev
   ```
3. Build for production:
   ```sh
   npm run build
   ```
4. Preview production build:
   ```sh
   npm run preview
   ```

## Notes

- Tailwind is configured via `tailwind.config.js`; styles live in `src/index.css`.
- Main UI is in `src/App.jsx` per the provided layout.
