import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      injectRegister: "auto",

      manifest: false,

      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json}"],

        navigateFallback: "index.html",

        cleanupOutdatedCaches: true,

        clientsClaim: true,

        skipWaiting: true,
      },

      devOptions: {
        enabled: true,
      },
    }),
  ],
});
