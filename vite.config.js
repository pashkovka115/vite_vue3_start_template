import Inspect from 'vite-plugin-inspect'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import path from "path";
import babel from 'vite-plugin-babel';

export default {
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
