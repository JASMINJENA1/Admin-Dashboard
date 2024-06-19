import { defineConfig } from 'vite';
import chokidar from 'chokidar'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 100,
      useFsEvents: false,
      chokidar: {

      },
    },  
  },
});
