import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import cleanup from 'rollup-plugin-cleanup';

export default [
    {
        input: './src/extension.ts',
        output: {
            file: './out/extension.js',
            format: 'cjs',
        },
        external: ['vscode'],
        plugins: [
            typescript({
                module: 'ESNext',
                target: 'es5',
            }),
            cleanup({ comments: 'none', extensions: ['ts'] }),
            resolve({
                customResolveOptions: {
                    moduleDirectory: 'node_modules',
                },
            }),
            commonjs(),
            visualizer(),
            terser({
                compress: {
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                    warnings: false,
                },
            }),
        ],
    }
];
