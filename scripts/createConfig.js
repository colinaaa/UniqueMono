import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import ts from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import sourcemap from 'rollup-plugin-sourcemaps';

const outputDir = 'dist';

function createConfig({ basePath, pkg, input = 'src/index.ts' }) {
  const { main } = pkg;
  return {
    input: path.join(basePath, input),
    output: [
      {
        file: path.join(basePath, main),
        format: 'cjs',
        sourcemap: true,
      },
      {
        dir: path.join(basePath, outputDir),
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [commonjs(), nodeResolve({ extensions: ['.js', '.ts'] }), ts(), terser(), sourcemap()],
    watch: {
      include: path.join(basePath, 'src/**'),
    },
  };
}

export default createConfig;
