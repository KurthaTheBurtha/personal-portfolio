const fs = require('fs');
const path = require('path');

// Media directories
const mediaDir = './public/media';
const videosDir = './public/videos';
const imagesDir = './public/images';

// Create media directories if they don't exist
function createMediaDirectories() {
  const directories = [mediaDir, videosDir, imagesDir];
  
  directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    }
  });
}

// Copy media files to the deployment
function copyMediaToDeployment(deploymentDir) {
  const mediaDest = path.join(deploymentDir, 'media');
  const videosDest = path.join(deploymentDir, 'videos');
  const imagesDest = path.join(deploymentDir, 'images');

  // Copy media files
  if (fs.existsSync(mediaDir)) {
    copyDirectory(mediaDir, mediaDest);
  }
  
  // Copy video files
  if (fs.existsSync(videosDir)) {
    copyDirectory(videosDir, videosDest);
  }
  
  // Copy image files
  if (fs.existsSync(imagesDir)) {
    copyDirectory(imagesDir, imagesDest);
  }
}

// Copy directory function
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
      console.log(`📁 Copied: ${entry.name}`);
    }
  }
}

// List available media files
function listMediaFiles() {
  console.log('\n📁 Available Media Files:');
  
  if (fs.existsSync(videosDir)) {
    const videos = fs.readdirSync(videosDir);
    if (videos.length > 0) {
      console.log('\n🎥 Videos:');
      videos.forEach(video => console.log(`  - /videos/${video}`));
    }
  }
  
  if (fs.existsSync(imagesDir)) {
    const images = fs.readdirSync(imagesDir);
    if (images.length > 0) {
      console.log('\n🖼️ Images:');
      images.forEach(image => console.log(`  - /images/${image}`));
    }
  }
  
  if (fs.existsSync(mediaDir)) {
    const media = fs.readdirSync(mediaDir);
    if (media.length > 0) {
      console.log('\n📄 Other Media:');
      media.forEach(file => console.log(`  - /media/${file}`));
    }
  }
}

// Export functions for use in deploy script
module.exports = {
  createMediaDirectories,
  copyMediaToDeployment,
  listMediaFiles
};

// Run if called directly
if (require.main === module) {
  createMediaDirectories();
  listMediaFiles();
  
  console.log('\n📋 Instructions:');
  console.log('1. Place your video files in: ./public/videos/');
  console.log('2. Place your image files in: ./public/images/');
  console.log('3. Place other media files in: ./public/media/');
  console.log('4. Run: npm run deploy:hostinger');
  console.log('\n💡 Example video paths for your projects:');
  console.log('  - /videos/waprep-demo.mp4');
  console.log('  - /videos/hurdle-demo.mp4');
  console.log('  - /videos/ai-teaching-demo.mp4');
  console.log('  - /videos/freelance-demo.mp4');
}
