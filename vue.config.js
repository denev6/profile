const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
        "~": path.resolve(""),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};