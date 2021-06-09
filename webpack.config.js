const path = require("path");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./scr/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: "style.css",
    }),
  ],
};
