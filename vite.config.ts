import autoprefixer from 'autoprefixer';
import react from '@vitejs/plugin-react-swc';
import {
    VitePWA,
    type ManifestOptions,
} from 'vite-plugin-pwa';
import {
    defineConfig,
    type UserConfigExport,
} from 'vite';

const manifest: Partial<ManifestOptions> = {
    background_color: '#f8f4e9',
    description: 'Celine\'s Beauty Studio',
    dir: 'ltr',
    display: 'standalone',
    lang: 'en',
    name: 'celine',
    orientation: 'any',
    scope: '/',
    short_name: 'celine',
    start_url: '/',
    theme_color: '#f8f4e9',
    categories: [
        'beauty',
    ],
    icons: [
        {
            purpose: 'any',
            sizes: '192x192',
            src: '/icons/pwa-192x192.png',
            type: 'image/png',
        }, {
            purpose: 'any',
            sizes: '512x512',
            src: '/icons/pwa-512x512.png',
            type: 'image/png',
        }, {
            purpose: 'any maskable',
            sizes: '512x512',
            src: '/icons/pwa-512x512.png',
            type: 'image/png',
        },
    ],
};

const vite: UserConfigExport = defineConfig({
    appType: 'spa',
    base: '/',
    envDir: '.',
    envPrefix: 'VITE_',
    logLevel: 'info',
    publicDir: 'public',
    root: process.cwd(),
    plugins: [
        VitePWA({
            manifest,
            registerType: 'autoUpdate',
            includeAssets: [
                'apple-touch-icon.png',
                'favicon.ico',
                'pwa-512x512.png',
            ],
        }),
        react(),
    ],
    build: {
        manifest: true,
        outDir: 'dist',
        sourcemap: 'hidden',
    },
    css: {
        postcss: {
            plugins: [autoprefixer],
        },
    },
    preview: {
        port: 3001,
    },
    server: {
        port: 3000,
    },
});

export default vite;
