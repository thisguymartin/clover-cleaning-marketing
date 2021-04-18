const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mpatino/Desktop/clover-cleaning-marketing/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/mpatino/Desktop/clover-cleaning-marketing/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/mpatino/Desktop/clover-cleaning-marketing/src/pages/index.js"))),
  "component---src-pages-service-details-js": hot(preferDefault(require("/Users/mpatino/Desktop/clover-cleaning-marketing/src/pages/service-details.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/mpatino/Desktop/clover-cleaning-marketing/src/pages/using-typescript.tsx")))
}

