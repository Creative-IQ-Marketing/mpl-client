import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80, progressive: true },
      jpg: { quality: 80, progressive: true },
      webp: { quality: 80 },
      svg: {
        multipass: true,
        plugins: [{ name: "preset-default", params: { overrides: { removeViewBox: false } } }],
      },
      includePublic: true,
      logStats: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-ui": ["lucide-react"],
        },
      },
    },
  },
  assetsInclude: ["**/*.webp", "**/*.jp2"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
