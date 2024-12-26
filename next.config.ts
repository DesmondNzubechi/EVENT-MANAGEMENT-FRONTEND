import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['www.freepik.com', 'img.freepik.com', 'res.cloudinary.com'],
    formats: ['image/avif', 'image/webp']
 }
};

export default nextConfig;
