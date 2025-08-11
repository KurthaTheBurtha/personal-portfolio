const path = require('path')
const { createServer } = require('http')

const PORT = process.env.PORT || 3000

// When using Next standalone output, the entry is in .next/standalone/server.js
const standaloneServerPath = path.join(__dirname, '.next', 'standalone', 'server.js')

try {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  require(standaloneServerPath)
  // The standalone server sets up its own listener, so we don't need to create one here.
  // This file exists so hosting platforms can run `node server.js` from project root.
} catch (err) {
  console.error('Failed to start standalone server:', err)
  console.error('Make sure you have run `npm run build` and that .next/standalone/server.js exists.')
  // As a fallback, try to start Next directly (useful if standalone is not present)
  try {
    const next = require('next')
    const app = next({ dev: false, dir: __dirname })
    const handle = app.getRequestHandler()
    app.prepare().then(() => {
      createServer((req, res) => handle(req, res)).listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`)
      })
    })
  } catch (fallbackErr) {
    console.error('Fallback start failed:', fallbackErr)
    process.exit(1)
  }
} 