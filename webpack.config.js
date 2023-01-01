const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    code: "./src/code.ts",
    helper: "./src/helper/Splitter.ts",
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
