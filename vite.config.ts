import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [tsconfigPaths(), svgr(), react(), tailwindcss()],
  server: {
    port: 3000,
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  },
  preview: { port: 3000, strictPort: true }
})
