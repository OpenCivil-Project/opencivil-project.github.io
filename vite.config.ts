import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Pages serves static files rather than resolving React routes. Publish small
// entry points for bookmarked plain URLs; the app continues to use HashRouter.
function pagesRouteEntries(): Plugin {
  const routes = ["features", "showcase", "about", "contact", "privacy-policy", "terms"];
  return {
    name: "github-pages-route-entries",
    apply: "build",
    generateBundle() {
      for (const route of routes) {
        this.emitFile({
          type: "asset",
          fileName: `${route}/index.html`,
          source: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Open//Civil</title>
  <meta name="robots" content="noindex">
  <script>window.location.replace('/#/${route}' + window.location.search + window.location.hash);</script>
</head>
<body><p>Opening Open//Civil… <a href="/#/${route}">Continue to the page</a>.</p></body>
</html>`,
        });
      }
    },
  };
}

export default defineConfig(({ mode }) => ({
  // This is the organization site, opencivil-project.github.io, so assets live
  // at the origin root (there is no repository-name prefix).
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), pagesRouteEntries(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
