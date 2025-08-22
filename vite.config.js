import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgo from "vite-plugin-svgo";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgo({
      plugins: [
        { removeViewBox: false }, // keep viewBox for responsiveness
        { cleanupIDs: true },
        { removeDimensions: true }, // allows width/height via CSS
      ],
    }),
  ],
});
