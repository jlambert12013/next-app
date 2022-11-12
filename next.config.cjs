import { join } from "path";

/** @type {import('next').NextConfig} */

export const nextConfig = {
  experimental: {
    appDir: true,
  },
};

export const sassOptions = {
  includePaths: [join(__dirname, "styles")],
};
