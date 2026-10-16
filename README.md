# New Zealand Family Travel Guide 2027

Family itinerary from 8 January to 18 February 2027. Buildless HTML, CSS and JavaScript for GitHub Pages.

## Publish

Upload `index.html`, `style.css`, `app.js`, `trip-data.js`, `assets/`, `vendor/`, `CREDITS.md`, and `.nojekyll` to the root of the existing repository. Keep GitHub Pages pointed at `main` and `/ (root)`. No build step or API key is needed.

## Content integrity

The 42 day records and 111 POIs in `trip-data.js` are preserved verbatim from repository commit `0be3a5eeb3c9fe4d8ac8edd6875e76a5f99d8134`. Dates are formatted in 2027 without changing the original day/month records. Christchurch remains day 1. Alternatives, source page numbers, approximate coordinates, overnight stops, distances, and original uncertainty notes are preserved.

Photographs illustrate each destination or its surrounding region; they do not add stops to the itinerary.

## Progress

Uses the original local-storage key `nz-family-trip-progress-v1` and original four progress fields. Existing progress and JSON exports remain compatible. Progress is device-local; export and import to transfer it. Replacing the site on the same GitHub Pages origin retains the browser's saved progress.

## Checks

Run `npm ci`, then `npm run check` and `npm test`. The tests check source data against its original commit, continuous 2027 dates, every day accordion and POI button, map initialization calls, filtering, persisted progress, export/import and dependency fallback.

Interaction tests use a DOM and a Leaflet API test double. They do not verify real map tile requests, browser rendering, iOS Safari behavior or visual layout. Those checks are still required in a supported browser. The supplied layout includes desktop and narrow-screen styles, keyboard-accessible day buttons and reduced-motion support.

The application itself requires no npm packages at runtime. Leaflet is vendored; map tiles need internet access.
