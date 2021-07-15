import babel from 'rollup-plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    nodeResolve({ extensions: ['.ts', '.tsx'] }),
    commonjs(),
    babel({
      extensions: ['.ts', '.tsx'],
      include: ['src/**/*'],
      exclude: 'node_modules/**',
    }),
    // nodeResolve(),
    // commonjs(),
    // typescript({
    //   typescript: require('typescript'),
    // }),
    // postcss({
    //   modules: true,
    // }),
    // terser(),
    // json(),
  ],
};