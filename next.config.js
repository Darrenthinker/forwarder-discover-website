/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
  poweredByHeader: false,
  // 优化构建和热重载
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  // 开发服务器配置
  devIndicators: {
    position: 'bottom-right',
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // 添加路由配置
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
};

module.exports = nextConfig;
