import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false, // Changed this to false so it helps you catch formatting errors early
  },
  // Allow access to remote image placeholder.
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'export',          // <-- CHANGE 'standalone' TO 'export'
  basePath: '/Streamey-Hub', // <-- ADD THIS LINE MATCHING YOUR REPO NAME
  transpilePackages: ['motion'],
  webpack: (config, { dev }) => {
    
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
