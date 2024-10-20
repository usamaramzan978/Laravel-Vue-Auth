import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/js/assets/main.css', 'resources/js/main.ts'],
            refresh: true,
        })
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
});
