const path = require("path");

module.exports = {
  // For GitHub Page Deployment
  publicPath: "/profile",
  outputDir: "docs",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
