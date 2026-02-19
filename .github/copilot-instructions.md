Project-specific Copilot instructions

Purpose
- Help contributors and AI agents quickly understand the architecture, development workflows,
  and code patterns so edits are safe, consistent and productive.

Big picture (what to know first)
- Frontend: two related frontends live in the repo root and `shop/` (HTML, CSS, `js/`). Look at
  `index.html`, `css/`, and `shop/js/` to understand UI entry points.
- Backend: PHP application under `shop/backend/`. This contains entry pages, include templates
  and small single-purpose endpoints. Key folders:
  - `shop/backend/resources/` — HTTP endpoints used by frontend JS (e.g. `products_search.php`,
    `render_products.php`, `render_cart_content.php`).
  - `shop/backend/database/` — single-action DB scripts (insert/update/delete/select). Example:
    `add_to_cart.php`, `update_cart_qty.php`.
  - `shop/backend/functions/` — rendering helpers (e.g. `product_card.php`, `show_products.php`).
  - `shop/backend/header.php` / `footer.php` — common includes used by pages.

Common patterns and conventions
- PHP is used as server-rendered pages + thin AJAX endpoints. Many server endpoints are single-purpose
  scripts (one action per file) — find them under `shop/backend/database` and `shop/backend/resources`.
- Frontend and backend are loosely coupled via AJAX endpoints. Search for `fetch`/`XMLHttpRequest`
  in `shop/js/` to see which resource files must be updated when changing API behavior.
- CSS is duplicated in multiple places (root `css/` and `shop/css/`). Tailwind is used (see `shop/package.json`).
- Header is loaded dynamically on the client: `shop/js/loadHeader.js` — changing header markup
  should keep this loader in mind.

Dev / run workflows (explicit commands)
- Start a PHP dev server (serves PHP + static assets). From the repo root run:

  ```bash
  php -S localhost:8000 -t shop
  ```

- Build/watch Tailwind (project uses tailwind in `shop/`):

  ```bash
  cd shop
  npx tailwindcss -i css/tailwind.css -o css/output.css --watch
  ```

- Database: the app expects a MySQL database. Connection details are in `shop/backend/db_connect.php`
  and `shop/backend/db_connect_remote.php`. Inspect those files before running; provide local
  credentials or use the remote connector if available.

Files to inspect for common changes (quick map)
- API endpoints: `shop/backend/resources/*.php` (update frontend JS accordingly)
- DB actions: `shop/backend/database/*` (maintain single-purpose behavior)
- UI components: `shop/backend/functions/product_card.php`, `shop/js/index.js`, `shop/js/script-product.js`
- Header/footer: `shop/backend/header.php`, `shop/backend/footer.php`, `shop/js/loadHeader.js`
- Styles: `shop/css/` and root `css/` folders; Tailwind config is implied by `package.json`.

Safety and editing notes for AI agents
- Preserve include paths and relative requires in PHP files. Many pages use `include`/`require`
  with relative paths; changing directories will break them.
- When modifying DB scripts, keep the single-action-per-file pattern or clearly document merges.
- When changing endpoints referenced by JS, update the JS call-sites (`shop/js/`) and any client-side
  HTML that expects a specific JSON/HTML fragment structure.
- There are no automated tests in the repo. After edits, run the PHP dev server and manually test
  the affected UI flows (product listing, search, cart) and the Tailwind build if styles changed.

If something is unclear
- Ask for the target environment (local vs remote DB) before changing `db_connect.php`.
- Ask which frontend copy (root vs `shop/`) is authoritative for the change — both exist.

Examples (short)
- To add a new product API: add an endpoint in `shop/backend/resources/` and a single-action DB file
  in `shop/backend/database/`, then update `shop/js/index.js` or `shop/js/script-product.js` to call it.
- To change product card HTML, edit `shop/backend/functions/product_card.php` and verify both
  server-rendered pages and any AJAX-rendered fragments still work.

End
Please review any missing local commands (build, deploy or db setup) and tell me to iterate.
