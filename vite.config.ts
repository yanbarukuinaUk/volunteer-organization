import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/volunteer-organization/', // GitHubリポジトリ名に合わせて変更してください
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});