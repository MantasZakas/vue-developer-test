import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/test/setup.ts',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "./common/variables" as *;
          @use "bootstrap/scss/bootstrap" as *;
        `,
        quietDeps: true,
      },
    },
  },
})
