const { execSync } = require('child_process')
const fs = require('fs')

try {
  execSync('tsc', { stdio: 'inherit' })
} catch (error) {
  console.error('Build failed')
  process.exit(1)
}

fs.copyFileSync('src/components/index.css', 'dist/components/index.css')
