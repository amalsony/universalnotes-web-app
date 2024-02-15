/** @type {import('next').NextConfig} */

const isDevelopment = process.env.NODE_ENV !== "production";
const rewritesConfig = isDevelopment
  ? [
      {
        source: "/api/:path*",
        destination: "http://localhost:8000/:path*",
      },
    ]
  : [];

const nextConfig = {
  rewrites: async () => rewritesConfig,
};

module.exports = nextConfig;
