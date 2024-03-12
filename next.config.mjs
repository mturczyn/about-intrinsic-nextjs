import withPWAInit from '@serwist/next'

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
    swSrc: 'app/service-worker.ts',
    swDest: 'public/service-worker.js',
})

const nextConfig = { output: 'standalone' }

export default withPWA(nextConfig)
