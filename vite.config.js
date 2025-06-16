import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio-alex/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      manifest: {
        scope: "/portfolio-alex/",
        name: "My Portfolio",
        display:"standalone",
        short_name: "Portfolio",
        description: "Your app description",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/portfolio-alex/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/portfolio-alex/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/portfolio-alex/pwa-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/portfolio-alex/pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/portfolio-alex/desktop1280x720.jpg",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/portfolio-alex/pic640x1136.jpg",
            sizes: "640x1136",
            type: "image/png",
            // mobile screenshot - omit form_factor or set to 'narrow'
          },
        ],
      },
    }),
  ],
});
