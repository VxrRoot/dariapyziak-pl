/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;
