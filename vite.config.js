import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://hyago-nsa.github.io/project-pokedex ",
  plugins: [react()],
  server: {
    host: true,
  },
});
