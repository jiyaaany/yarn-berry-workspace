const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    // @link https://nextjs.org/docs/advanced-features/output-file-tracing#caveats
    // outputFileTracingRoot: undefined, // ,path.join(__dirname, '../../'),
    outputFileTracingRoot: path.join(__dirname, '../../'),

    // Experimental monorepo support
    // @link {https://github.com/vercel/next.js/pull/22867|Original PR}
    // @link {https://github.com/vercel/next.js/discussions/26420|Discussion}
    externalDir: true
  }
  // experimental: {
  //   // this includes files from the monorepo base two directories up
  //   outputFileTracingRoot: path.join(__dirname, '../../'),
  // }
}

module.exports = nextConfig
