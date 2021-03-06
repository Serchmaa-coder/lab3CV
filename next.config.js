/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    PUBLIC_URL: "https://your-organization-or-username.github.io/my-nextjs-app",
    assetPrefix: './'
  },
  images: {
    loader: 'akamai',
    path: '/',
  }
};
