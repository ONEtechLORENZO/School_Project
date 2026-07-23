/**
 * Post-build fixup that aligns `public` folder references with the Vite base.
 *
 * Vite rewrites its own bundled assets (JS/CSS/ES-imported images) to include
 * the base path, but it does NOT touch root-absolute string references to files
 * in the `public` folder (e.g. url(/foo.png), src="/foo.jpg"). When the site is
 * served from a sub-path those resolve to the domain root and 404.
 *
 * The site is currently served from the ROOT of a custom domain (BASE '/'), so
 * root-absolute references are already correct and this script is a no-op: the
 * guard below skips every path that already begins with BASE. It stays in the
 * build so that setting BASE back to a sub-path (e.g. '/Repo/' for a GitHub
 * Pages project URL) restores the rewriting with no other change.
 *
 * The guard is derived from BASE rather than hardcoded, which keeps already-based
 * Vite assets (BASE + 'assets/…') from being prefixed twice. Matching requires a
 * known file extension, so extensionless router paths (/contattaci) can never be
 * rewritten by accident.
 */
import fs from 'fs'
import path from 'path'

const BASE = '/'
const DIST = 'dist'
const exts = new Set(['.js', '.css', '.html'])

// Quote/paren + a root-absolute path ending in a public asset extension.
// Covers documents/audio too (PDF book lists, regulations, MP3 homilies), not just images.
const re =
  /([("'])(\/[^"')]*?\.(?:png|jpe?g|jfif|svg|gif|webp|pdf|mp3|docx|xlsx))/g

let filesChanged = 0
let refsChanged = 0

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (exts.has(path.extname(entry.name))) {
      const src = fs.readFileSync(full, 'utf8')
      let count = 0
      const out = src.replace(re, (m, q, p) => {
        if (p.startsWith(BASE)) return m // already based — leave it alone
        count++
        return `${q}${BASE}${p.slice(1)}`
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
