# Azure Static Web Apps POC

Minimal static HTML site for proving Azure Static Web Apps deployment from GitHub (`jorgedaa`).

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx --yes serve .
```

## Deploy to Azure Static Web Apps

1. Push this repo to `github.com/jorgedaa/<repo-name>`.
2. In Azure Portal → **Create a resource** → **Static Web App**.
3. Connect the GitHub repo; set **App location** to `/` (repo root). Leave API and output blank (no build).
4. Azure adds a GitHub Actions workflow and deploys on every push to the tracked branch.

Config lives in `staticwebapp.config.json` (fallback routing + basic headers).
