import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: '/quotes',
        destination: 'http://quotes.dsernst.com',
        permanent: true,
      },
      {
        source: '/goenka_recordings/:path*', // wildcard match
        destination: 'https://blog.dsernst.com/goenka_recordings/:path*', // preserve subpath
        permanent: true,
      },
    ]
  },
}

export default nextConfig
