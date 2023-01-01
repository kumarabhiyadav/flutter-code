const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    code: "./src/code.ts",
    helper: "./src/helper/layoutClassfication.ts",
    figma_properties: "./src/utils/figma_properties.ts",
    flutter_properties: "./src/utils/flutter_properties.ts",
    generator: "./src/utils/generator.ts",
  },
  output: {
    filename: "[name].js",
    path: __dirname+ "/dist",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
};
