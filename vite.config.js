import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    new federation({
      name: "productApp",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./ProductApp": "./src/productApp/ProductApp",
      },
      shared: ["react"],
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }),
  ],
  preview: {
    host: "localhost",
    port: 5173,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
