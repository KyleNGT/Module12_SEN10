# Module 12 Quiz Project

This repository contains a GitHub Pages-ready static site with automated deployment and quality checks. The site highlights the worst UI I have encountered, documents a redesign plan, and demonstrates a workflow-first approach to front-end craftsmanship.

## Project Goals

- Serve a static HTML/CSS/JS site via GitHub Pages.
- Bundle the site into a `dist/` directory before publishing.
- Run ESLint on each push to keep the JavaScript healthy.
- Fail the workflow if linting does not pass, preventing bad deployments.

## Local Development

```bash
npm install
npm run lint
npm run build
npm run serve # optional: use something like `npx serve dist`
```

- `npm run lint` checks your JS against the rules in `.eslintrc.json`.
- `npm run build` produces a clean `dist/` folder with just the assets needed for GitHub Pages.

## Triggering the Lint Failure (Assignment Requirement)

To prove the linter blocks bad code, remove the semicolon mentioned in `script.js` under the "lint demo" comment and run `npm run lint`. The command (and the GitHub Action) will fail with an ESLint error until you restore the semicolon.

## GitHub Actions Workflow

- File: `.github/workflows/deploy.yml`
- Runs on every push to `main`.
- Steps: install dependencies, lint, build, and deploy to the `gh-pages` branch using the official `pages` deployment action.
- You must enable GitHub Pages to point to the `gh-pages` branch in your repository settings after the first successful workflow run.

## Repository Link

_Add the final public repository URL here once you push the project:_

```
https://github.com/<your-username>/<your-repo-name>
```

## LLM Prompts Log

All conversations and prompts exchanged with language models should be copied into `llm-prompts.md`. Keep this file updated so reviewers can verify the provenance of the generated assets.

## License

MIT License. See [`LICENSE`](LICENSE) for details.
