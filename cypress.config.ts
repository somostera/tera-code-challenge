import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://tera-code-challenge.vercel.app",
    setupNodeEvents(on, config) {
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
