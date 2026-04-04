# Signal Institute refactor

This package reorganizes the uploaded HTML files into a cleaner static site structure for GitHub Pages.

## What changed
- Moved shared JavaScript into `assets/js/common.js`
- Added shared styles in `assets/css/common.css`
- Moved each page's remaining styles into `assets/css/pages/`
- Reorganized pages to match the intended sitemap
- Updated the main nav links across pages
- Added a placeholder `resources/index.html`

## Structure
- `index.html`
- `about/index.html`
- `about/diana.html`
- `about/courtney.html`
- `about/deb.html`
- `about/matt.html`
- `offerings/index.html`
- `contact/index.html`
- `resources/index.html`

## Host on GitHub Pages
1. Create a new GitHub repository.
2. Upload all files from this folder.
3. In GitHub, go to Settings -> Pages.
4. Set Source to "Deploy from a branch".
5. Choose the `main` branch and the `/ (root)` folder.
6. Save and wait for the site to publish.

Your GitHub Pages URL will usually be:
`https://YOUR-USERNAME.github.io/REPO-NAME/`
