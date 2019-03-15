import resolve from 'rollup-plugin-node-resolve';
import pug from 'rollup-plugin-pug';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import VuePlugin from 'rollup-plugin-vue';
import pkg from './package.json';

export default {
  input: 'src/main.jsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      only: ['vue', 'vuex', 'vuera'],
    }),
    pug(),
    postcss({
      plugins: [autoprefixer],
    }),
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true,
    }),
    commonjs(),
    VuePlugin(),
  ],
  external: ['react', 'prop-types'],
};
