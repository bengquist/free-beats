const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        include: path.resolve(__dirname, "src"),
        use: ["babel-loader"]
      },
      {
        test: /\.(js|ts)x?$/,
        enforce: "pre",
        use: [
          {
            options: {
              eslintPath: require.resolve("eslint")
            },
            loader: require.resolve("eslint-loader")
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|eot|mp3|mp4|zip|pdf)$/i,
        use: [
          {
            loader: "url-loader",
            options: { name: "static/[hash:16].[ext]", limit: 8192 }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html" //source html
    })
  ]
};
