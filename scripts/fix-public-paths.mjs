/**
 * Post-build fixup for GitHub Pages (project site under /School_Project/).
 *
 * Vite rewrites its own bundled assets (JS/CSS/ES-imported images) to include
 * the base path, but it does NOT touch root-absolute string references to files
 * in the `public` folder (e.g. url(/foo.png), src="/foo.jpg"). On a project
 * Pages deployment those resolve to the domain root and 404.
 *
 * This script prefixes ONLY asset URLs that are root-absolute and not already
 * based, leaving routes (/contattaci) and Vite assets (/School_Project/assets/…)
 * completely alone. Matching requires a known file extension, so extensionless
 * router paths can never be rewritten by accident.
 */
import fs from 'fs'
import path from 'path'

const BASE = '/School_Project/'
const DIST = 'dist'
const exts = new Set(['.js', '.css', '.html'])

// Quote/paren + "/" + (not already based) + path ending in a public asset extension.
// Covers documents/audio too (PDF book lists, regulations, MP3 homilies), not just images.
const re =
  /([("'])\/(?!School_Project\/)([^"')]*?\.(?:png|jpe?g|jfif|svg|gif|webp|pdf|mp3|docx|xlsx))/g

let filesChanged = 0
let refsChanged = 0

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (exts.has(path.extname(entry.name))) {
      const src = fs.readFileSync(full, 'utf8')
      let count = 0
      const out = src.replace(re, (_m, q, rest) => {
        count++
        return `${q}${BASE}${rest}`
      })
      if (count > 0) {
        fs.writeFileSync(full, out)
        filesChanged++
        refsChanged += count
      }
    }
  }
}

if (!fs.existsSync(DIST)) {
  console.error(`[fix-public-paths] "${DIST}" not found — run after vite build.`)
  process.exit(1)
}
walk(DIST)
console.log(`[fix-public-paths] prefixed ${refsChanged} public asset refs across ${filesChanged} files with ${BASE}`)
