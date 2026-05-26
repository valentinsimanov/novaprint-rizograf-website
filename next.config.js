/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/rizograf',
  assetPrefix: '/rizograf',
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}
module.exports = nextConfig
