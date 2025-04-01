/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,  // Ensures proper static exports
  output: "export", // Forces Next.js to generate static files
};

module.exports = nextConfig;
