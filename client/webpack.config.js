const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  plugins: [
    // Example Consumer App Components
    // new ModuleFederationPlugin({
    //   name: "app1",
    //   remotes: {
    //     app2: "app2@http://localhost:3002/remoteEntry.js",
    //   },
    //   shared: ["react", "react-dom"],
    // }),

    // Example Bi-directional sharing
    // new ModuleFederationPlugin({
    //   name: "app1",
    //   filename: "remoteEntry.js",
    //   remotes: {
    //     app2: "app2@http://localhost:3002/remoteEntry.js",
    //   },
    //   exposes: {
    //     "./Button": "./src/Button",
    //   },
    //   // sharing code based on the installed version, to allow for multiple vendors with different versions
    //   shared: [
    //     {
    //       ...deps,
    //       react: {
    //         // eager: true,
    //         singleton: true,
    //         requiredVersion: deps.react,
    //       },
    //       "react-dom": {
    //         // eager: true,
    //         singleton: true,
    //         requiredVersion: deps["react-dom"],
    //       },
    //     },
    //   ],
    // }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
