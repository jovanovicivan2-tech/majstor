import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*.supabase.co", pathname: "/storage/v1/object/public/**" }],
    formats: ["image/webp"],
  },
  experimental: {
    serverActions: { allowedOrigins: ["localhost:3000", "majstorimargarita.rs", "majstor-margarita.vercel.app"] },
  },
};

export default nextConfig;
