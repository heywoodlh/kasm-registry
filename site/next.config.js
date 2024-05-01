/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'heywoodlh kasm registry',
    description: 'kasm registry by heywoodlh, for fun',
    icon: '/img/logo.svg',
    listUrl: 'https://heywoodlh.github.io/kasm-registry',
    contactUrl: 'https://heywoodlh.io/contact',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
