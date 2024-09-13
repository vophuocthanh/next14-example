/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  images: {
    domains: ['images.unsplash.com', 'content.presspage.com', 'i0.wp.com'],
  },
};

export default nextConfig;
