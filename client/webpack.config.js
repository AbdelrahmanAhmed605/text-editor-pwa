const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
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
      // Injects the specified service worker script (our srs-sw.js file) into the generated service worker file
      new InjectManifest({
        swSrc: "./src/src-sw.js",
        swDest: "service-worker.js",
      }),
      new WebpackPwaManifest({
        // manifest.json:
        name: "Text Editor PWA",
        short_name: "Text-Editor",
        description:
          "A single-page application text editor that runs in the browser, stores data to an IndexedDB database, and meets the PWA criteria.",
        background_color: "#7eb4e2", // background color of the PWA's splash screen
        theme_color: "#7eb4e2",
        start_url: "./", // URL that the PWA should load when it is launched
        publicPath: "./", // path to the root of the assets that the PWA uses. This is used to allow the install option in the Chrome address bar.
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
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
