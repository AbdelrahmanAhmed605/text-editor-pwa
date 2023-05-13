const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      // port to use for the development server.
      port: 8081,
      // The `hot` option is to use the webpack-dev-server in combination with the hot module replacement API.
      hot: "only",
    },
    plugins: [
      // Generate an HTML file with the specified template (our index.html) that includes the generated JavaScript and CSS bundles
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "Webpack Plugin",
      }),
      // Extract CSS code into separate files for improved performance and better cacheability
      new MiniCssExtractPlugin(),
    ],

    module: {
      rules: [
        // to handle CSS files - extracts CSS into separate files and resolves any @import and url() statements in CSS files
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        // to handle images -  emits images to the output directory and their paths will be injected into the bundles
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        // tool for compiling modern JavaScript features into a compatible version that can run in older browsers
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };
};
