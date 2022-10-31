/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  // assetPrefix: "/",
  // when hosting on gh pages you have to change the assetPrefix to then name of your repo
  assetPrefix: "./form",
};

export default nextConfig;
