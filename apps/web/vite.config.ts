import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/global/mixins.scss";`,
      },
    },
  },
  build: {
    outDir: 'dist/',
  },
  plugins: [react(), tsconfigPaths()],
});
