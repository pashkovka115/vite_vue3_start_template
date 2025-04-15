import Inspect from 'vite-plugin-inspect'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import path from "path";
import babel from 'vite-plugin-babel';

export default {
    // base: './',
    root: path.resolve(__dirname, 'src'),
    publicDir: path.resolve(__dirname, 'src', 'copy_files'),
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true
    },
    plugins: [
        Inspect(),
        vue(),
        babel(),
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer({}) // add options if needed
            ],
        }
    },
    resolve: {
        alias:{
            '@': path.resolve(__dirname, 'src')
        }
    }
}
