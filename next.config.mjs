import { withSerwist } from '@serwist/turbopack'

/** @type {import('next').NextConfig} */
export default withSerwist({
    swSrc: 'app/service-worker.ts',
    swDest: 'public/service-worker.js',
    swUrl: '/service-worker.js',
    output: 'standalone',
})
