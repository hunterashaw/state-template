import { babel } from '@rollup/plugin-babel'
import { terser } from "rollup-plugin-terser"
import filesize from 'rollup-plugin-filesize'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
    input: './src/index.js',
    output: {
        file: './dist/bundle.js',
        format: 'es'
    },
    plugins: [nodeResolve(), babel({ configFile:'prod-babel.config.json', babelHelpers: 'bundled' }),  terser(), filesize()]
}