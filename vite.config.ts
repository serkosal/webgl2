import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(
    {
        base: '/webgl2/',
        plugins: [
            tailwindcss(),
        ],
    }
);