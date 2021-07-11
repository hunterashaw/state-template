import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
    input: './src/index.js',
    output: {
        file: './dist/bundle.js',
        format: 'es'
    },
    plugins: [nodeResolve(), babel({ configFile:'dev-babel.config.json', babelHelpers: 'bundled' })]
}