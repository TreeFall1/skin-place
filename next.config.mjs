/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "steamcommunity.com",
        port: "",
        pathname: "**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "steamcommunity-a.akamaihd.net",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/check",
        destination: "https://killswitch-production-8b2f.up.railway.app/check",
      },
    ];
  },
};

export default nextConfig;
