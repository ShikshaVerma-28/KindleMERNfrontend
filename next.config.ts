// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images:{
//     domains:['m.media-amazon.com'],
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["m.media-amazon.com"],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        canvas: false,
        encoding: false,
      };
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        canvas: false,
        encoding: false,
      };
    }
    return config;
  },
};

export default nextConfig;
