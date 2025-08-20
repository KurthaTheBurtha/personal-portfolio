const fs = require('fs');
const path = require('path');
const { createMediaDirectories, copyMediaToDeployment, listMediaFiles } = require('./upload-media');

// Create hostinger directory
const hostingerDir = './hostinger-deploy';

// Clean and create hostinger directory
if (fs.existsSync(hostingerDir)) {
  fs.rmSync(hostingerDir, { recursive: true });
}
fs.mkdirSync(hostingerDir);

// Create media directories
createMediaDirectories();

// Copy all files from out directory to hostinger directory
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy from out to hostinger-deploy
copyDirectory('./out', hostingerDir);

// Copy media files to deployment
copyMediaToDeployment(hostingerDir);

// Create .htaccess file for Hostinger
const htaccessContent = `RewriteEngine On

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>`;

fs.writeFileSync(path.join(hostingerDir, '.htaccess'), htaccessContent);

console.log('✅ Hostinger deployment files created in ./hostinger-deploy/');
console.log('📁 Upload the contents of ./hostinger-deploy/ to your Hostinger public_html directory');
console.log('📄 Make sure index.html is in the root of your Hostinger directory');
