# Rohan Singh Portfolio

Recruiter-focused one-page portfolio built with Vue 3, Vite, and Tailwind CSS.

Expected GitHub Pages URL for this repository:

`https://devrohansisodia.github.io/portfolio/`

## Features

- One-page recruiter funnel layout
- Featured NewsTech flagship project section
- Dark and light mode with persisted preference
- Responsive sections for mobile, tablet, and desktop
- Data-driven content structure
- GitHub Pages-ready Vite configuration

## Tech Stack

- Vue 3
- Vite
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

This repository is expected to be published as `portfolio`, so the production build for GitHub Pages should use the repository base path:

```bash
VITE_BASE_PATH=/portfolio/ npm run build
```

Local development still works normally with:

```bash
npm run dev
```

Because Vite uses `/` by default unless `VITE_BASE_PATH` is provided.

### GitHub Pages Setup

1. Push this project to a GitHub repository named `portfolio`.
2. Run the production build for repository deployment:

```bash
VITE_BASE_PATH=/portfolio/ npm run build
```

3. Commit and push the project to GitHub.
4. In GitHub, open the repository settings.
5. Go to `Settings` → `Pages`.
6. Under `Build and deployment`, choose the source you want to use.
7. If deploying manually, publish the contents of `dist/` using your preferred workflow.
8. If using GitHub Pages from a branch later, ensure the built output being published was generated with `VITE_BASE_PATH=/portfolio/`.

This project does not configure automatic deployment by default.

### Future Custom Domain

If you later want a custom domain:

1. Add your domain in `GitHub Pages` repository settings.
2. Create the required DNS records with your domain provider.
3. Add a `public/CNAME` file only when you are ready to use the custom domain.
4. Rebuild and republish after the custom domain is configured.

## Assets

- Profile image: `public/images/profile.png`
- Resume: `public/resume/rohan-singh-resume.pdf`

## Folder Structure

```txt
src/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── composables/
├── config/
├── data/
├── App.vue
├── main.js
└── style.css
```
