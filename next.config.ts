import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    formats: ["image/webp"],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "majstorimargarita.rs"],
    },
  },
};

export default withNextIntl(nextConfig);
