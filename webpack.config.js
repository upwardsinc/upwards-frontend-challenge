const path = require("path");
const SRC_DIR = path.join(__dirname, "/react-client/src");
const DIST_DIR = path.join(__dirname, "/react-client/dist");
const webpack = require("webpack");

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.png$/,
        use: "url-loader?limit=100000&minetype=image/png",
      },
      {
        test: /\.jpg/,
        use: "file-loader",
      },
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: "babel-loader",
        options: {
          "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
          ]
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
};