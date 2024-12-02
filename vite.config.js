import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // Import the PWA plugin

export default defineConfig({
  base: "/tenantapp", // Base URL for your app
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically update the service worker
      manifest: {
        name: "TenantApp",
        short_name: "TenantApp",
        description: "A tenant management application.",
        start_url: "/tenantapp/index.html",
        scope: "/tenantapp/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "/src/assets/home-page-brown.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/src/assets/home-page-brown-2.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /.*\.(js|css|html|png|jpg|svg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'tenantapp-assets',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
              }
            }
          }
        ]
      }
    })
  ]
});
// ff