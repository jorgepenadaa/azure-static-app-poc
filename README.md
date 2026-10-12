# Azure Static Web Apps POC

Minimal static HTML site. Hosted on **GitHub Pages** (Azure Static Web Apps left as an optional later path).

**Live:** https://jorgepenadaa.github.io/azure-static-app-poc/

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx --yes serve .
```

## Deploy

Push to `master`. GitHub Pages serves the repo root automatically.

(`staticwebapp.config.json` is unused on Pages; keep it if you later wire up Azure Static Web Apps.)
