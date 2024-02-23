/** @type {import('next').NextConfig} */

// const isDevelopment = process.env.NODE_ENV !== "production";

const rewritesConfig = [
  {
    source: "/api/:path*",
    destination: "https://api.universalnotes.org/:path*",
  },
];

const nextConfig = {
  rewrites: async () => rewritesConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
