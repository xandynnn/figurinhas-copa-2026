import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Álbum da Copa 2026 IguabaTem",
        short_name: "IguabaTem",
        description: "Álbum Virtual da Copa 2026",
        display: "standalone",
        start_url: "/",
        scope: "/",
        orientation: "portrait",
        theme_color: "#5ba400",
        background_color: "#5ba400",
        icons: [
          {
            src: "/android-icon-36x36.png",
            sizes: "36x36",
            type: "image/png",
          },
          {
            src: "/android-icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "/android-icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/android-icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/android-icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/android-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,json}"],
      },
    }),
  ],
});
