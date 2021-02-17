const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../dist/public"),
  pages: {
    index: {
      entry: "src/main.js",
      title: "Livraria do Cowboy",
    },
  },
  transpileDependencies: ["vuetify"],
};
