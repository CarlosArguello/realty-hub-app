import { fileURLToPath } from "url"
import { defineConfig } from "vitest/config"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/app/AppSetupTest.ts"
  },
  globals: true,
  resolve: {
    alias: [
      {
        find: /.*\.svg\?react$/,
        replacement: fileURLToPath(new URL("./src/test/mocks/SvgMock.tsx", import.meta.url))
      }
    ]
  }
})
