# Media Setup Guide

## 📁 Directory Structure

Your media files should be organized as follows:

```
public/
├── videos/          # Video demos for projects
├── images/          # Additional images
└── media/           # Other media files
```

## 🎥 Video Setup

### 1. Create Media Directories
```bash
npm run setup-media
```

### 2. Add Your Video Files
Place your video files in the `public/videos/` directory:

- `waprep-demo.mp4` - Waprep Tuition Portal demo
- `ai-teaching-demo.mp4` - AI Teaching Assistant demo
- `freelance-demo.mp4` - Free Lance Web Services demo

**Note**: The Hurdle Touchdown Time Finder uses a YouTube embed from [this demo video](https://www.youtube.com/watch?v=HYwXoqtBIQI).

### 3. Video Requirements
- **Format**: MP4 (recommended)
- **Size**: Under 10MB each for good performance
- **Duration**: 30-60 seconds per demo
- **Resolution**: 1920x1080 or similar aspect ratio
- **Audio**: Muted (required for auto-play)

## 🖼️ Image Setup

### 1. Add Images
Place additional images in `public/images/` directory.

### 2. Reference in Code
Use the path `/images/your-image.jpg` in your components.

## 📄 Other Media

Place other media files (PDFs, documents, etc.) in `public/media/` directory.

## 🚀 Deployment

### 1. Build and Deploy
```bash
npm run deploy:hostinger
```

This will:
- Build your Next.js app
- Copy all media files to the deployment
- Create the `hostinger-deploy` folder

### 2. Upload to Hostinger
Upload the **contents** of `hostinger-deploy/` to your Hostinger `public_html` directory.

## 📋 File Paths for Projects

Your projects are configured to use these video paths:

- **Waprep Tuition Portal**: `/videos/waprep-demo.mp4`
- **Hurdle Touchdown Time Finder**: YouTube embed ([demo video](https://www.youtube.com/watch?v=HYwXoqtBIQI))
- **AI Teaching Assistant**: `/videos/ai-teaching-demo.mp4`
- **Free Lance Web Services**: `/videos/freelance-demo.mp4`

## 🔧 Troubleshooting

### Video Not Playing
1. Check file path is correct
2. Ensure video file exists in `public/videos/`
3. Verify video format is MP4
4. Check file size is reasonable

### 403 Error
1. Ensure `index.html` is in the root of `public_html`
2. Check file permissions (644 for files, 755 for directories)
3. Verify `.htaccess` file is present

### Media Not Loading
1. Check file paths start with `/`
2. Ensure files are in the correct directories
3. Verify deployment copied all media files
