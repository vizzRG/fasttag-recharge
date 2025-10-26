import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // reactStrictMode: true,
  reactCompiler: true,
};

const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
export default pwaConfig(nextConfig);
