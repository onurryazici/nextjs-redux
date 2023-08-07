/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "primefaces.org",
        port: "",
        pathname: "/cdn/**",
      },
    ],
  },
};

module.exports = nextConfig;
