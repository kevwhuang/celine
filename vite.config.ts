import { type ManifestOptions, type VitePWAOptions, VitePWA as vitePWA } from 'vite-plugin-pwa';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const manifest: Partial<ManifestOptions> = {
    background_color: '#f8f4e9',
    description: 'Celine\'s Beauty Studio',
    display: 'standalone',
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
            purpose: 'maskable',
            sizes: '512x512',
            src: '/icons/pwa-512x512.png',
            type: 'image/png',
        },
    ],
    name: 'Celine',
    orientation: 'any',
    short_name: 'Celine',
    theme_color: '#f8f4e9',
};

const pwa: Partial<VitePWAOptions> = {
    includeAssets: [
        'apple-touch-icon.png',
        'favicon.ico',
        'pwa-192x192.png',
        'pwa-512x512.png',
    ],
    manifest,
    registerType: 'autoUpdate',
};

const vite = defineConfig({
    appType: 'spa',
    build: { outDir: 'dist' },
    css: { postcss: { plugins: [autoprefixer as any] } },
    envPrefix: 'VITE_',
    plugins: [
        react(),
        vitePWA(pwa),
    ],
    publicDir: 'public',
    root: process.cwd(),
    server: { port: 3000 },
});

export default vite;
