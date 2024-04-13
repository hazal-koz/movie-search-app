/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'm.media-amazon.com',
              port: '',
              pathname: '/images/**',
            },
            {
              protocol: 'https',
              hostname: 'upload.wikimedia.org',
              port: '',
              pathname: '/wikipedia/**',
            },
          ],
      },
      env: {
        apiKey: '5116cd5d',
      },
};

export default nextConfig;
