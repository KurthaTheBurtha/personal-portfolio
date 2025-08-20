/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
  },
}

module.exports = nextConfig 