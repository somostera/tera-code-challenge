import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
