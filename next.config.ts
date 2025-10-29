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
    ]
  },
}

export default nextConfig
