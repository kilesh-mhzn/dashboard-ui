import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@contexts": "/src/contexts",
      "@ui": "/src/ui",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@services": "/src/services",
      "@hooks": "/src/hooks",
      "@models": "/src/models",
      utils: "/src/utils",
    },
  },
});
