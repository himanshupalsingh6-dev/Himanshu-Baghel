import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "../../attached_assets"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    host: true,
    port: 5173,
  },
});
