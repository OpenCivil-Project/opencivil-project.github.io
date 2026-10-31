# Open//Civil website

Open//Civil is the organization behind Open//Structures, a structural analysis application. Open Seismic is Coming Soon.

This repository contains the website only. The application repository is separate.

## Local development

Install Node.js 22, then run:

```sh
npm ci
npm run dev
```

Production checks:

```sh
npm run build
npx tsc --noEmit -p tsconfig.app.json
npm run lint
npm run preview
```

## GitHub Pages deployment

The canonical website is https://opencivil-project.github.io/ and its repository is OpenCivil-Project/opencivil-project.github.io. This is an organization site, so Vite's base is /.

In GitHub, Settings → Pages → Build and deployment must use **GitHub Actions**. The workflow builds on pushes to main and can also be run manually. It installs the locked dependencies, builds dist/, verifies the entry points, and deploys that artifact through the github-pages environment. Never publish the raw Vite source tree as the website: the source index.html needs the production build.

The application uses HashRouter. Links such as /#/features work on static hosting without server rewrites. The production build also emits static entry points for /features/, /showcase/, /about/, /contact/, /privacy-policy/, and /terms/ so bookmarked plain URLs load instead of showing GitHub's file-not-found page. public/404.html recovers other paths into the app's router, where unknown routes show the application's 404 page. public/.nojekyll is copied into the production artifact.

The root index.html, CV, and Google verification file are included in the generated site. Keep public/ShaikhAhmedAzad_CV.pdf at its current path for the developer page.

## Add your final images and videos

The home and Implementation pages share two prepared 16:9 slots. Copy your files into public/media/, then set the matching URLs in src/data/media.ts:

```ts
export const implementationMedia = {
  model: { src: "/media/implementation-model.png" },
  walkthrough: { src: "/media/implementation-walkthrough.mp4" },
};
```

Recommended media: 1920 × 1080 PNG/WebP images and H.264 MP4 videos. Empty URLs display the designed placeholders without requesting missing files. Images fit without cropping; videos use native controls and do not autoplay. Existing demonstration videos and comparison screenshots remain available.

## Content and project links

- Organization: https://github.com/OpenCivil-Project
- Open//Structures: https://github.com/OpenCivil-Project/Open-Structures
- Current installer: https://github.com/OpenCivil-Project/Open-Structures/releases/latest

Feature descriptions reflect the application structure and project documentation. OpenSees integration and advanced nonlinear workflows are explicitly a Work in Progress, with active integration and refinement ongoing. The developer biography and CV are preserved.

Scroll reveals respect reduced-motion preferences. The light/dark toggle follows the system preference initially and saves the visitor's selection locally.
