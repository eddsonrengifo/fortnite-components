import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'
import image from '@rollup/plugin-image'

const config = {
  name: 'Fortnite components',
  extensions: ['.ts', '.tsx'],
}

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    image(),
    peerDepsExternal(),
    resolve({ extensions: config.extensions }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      extensions: config.extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
    }),
  ],
}
