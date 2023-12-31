// eslint-disable-next-line @typescript-eslint/no-var-requires
const { build } = require('esbuild');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package.json');

const watch = process.argv.includes('--watch');
const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies
});

const commonConfig = {
  entryPoints: ['./index.ts'],
  outdir: 'dist',
  target: 'es2015',
  bundle: true,
  tsconfig: 'tsconfig.build.json',
  external: [...external],
  sourcemap: true
};

Promise.all([
  build({
    ...commonConfig,
    format: 'cjs',
    minify: !watch
  }),
  build({
    ...commonConfig,
    format: 'esm',
    outExtension: {
      '.js': '.mjs'
    },
    minify: !watch
  })
]).catch(() => process.exit(1));
