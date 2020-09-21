const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.html$/, loader: 'html'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { 
          presets: ["@babel/env"],
          plugins: ["@babel/transform-runtime"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
    }
    ],
  },
  resolve: { 
    extensions: ["*", ".js", ".jsx", '.json', '.scss', '.css'],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Styles: path.resolve(__dirname, 'src/styles'),
      Bootstrap: path.resolve(__dirname, 'src/bootstrap/'),
      Services: path.resolve(__dirname, 'src/services/'),
      Utils: path.resolve(__dirname, 'src/util/'), 
      Img: path.resolve(__dirname, 'src/img/'), 
    }
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    host: '0.0.0.0',
    port: 3000,
    publicPath: 'http://localhost:3000/dist/', //"http://172.21.239.143:3000/dist/", 
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};