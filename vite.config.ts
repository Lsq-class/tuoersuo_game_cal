import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cesium from 'vite-plugin-cesium';
import req from 'vite-plugin-require-transform'
import topLevelAwait from 'vite-plugin-top-level-await'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cesium(),
    // topLevelAwait({ promiseExportName: '__tla', promiseImportName: (i) => `__tla_${i}` }),
    req({ fileRegex: /.js$|.ts$|.tsx$/ })],
  // build: {
  //   target: ["edge90", "chrome90", "firefox90", 'safari15']
  // },

  server: {
    host: '127.0.0.1',
    port: 5173,
    // https: false,
    proxy: {
      "/getImageData": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/getImageData/, ""),
      },
    },
  },
  define: {
    'process.env': process.env
  }
})
