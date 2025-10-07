import { fileURLToPath } from "url"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./src/AppSetupTest.ts"
  },
  resolve: {
    alias: [
      // Cualquier import que termine en .svg?react -> usa el mock
      {
        find: /.*\.svg\?react$/,
        replacement: fileURLToPath(new URL("./src/test/mocks/SvgMock.tsx", import.meta.url))
      }
    ]
  }
})
