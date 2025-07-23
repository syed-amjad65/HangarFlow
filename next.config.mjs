/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  basePath: '/aog-neural-ai-system',
  assetPrefix: '/aog-neural-ai-system/',
  images: {
    unoptimized: true
  },
  
  // Metadata for the application
  env: {
    CUSTOM_KEY: 'AOG-Neural AI System',
    VERSION: '1.0.0',
    AUTHOR: 'Syed Amjad',
    CONTACT_EMAIL: 'syedemirates2021@gmail.com',
    CONTACT_WHATSAPP: '+923352177766'
  },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'recharts'],
    appDir: true
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  },

  // ESLint and TypeScript configurations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
