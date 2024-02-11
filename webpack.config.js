const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const plugins = [new CleanWebpackPlugin()]

const clientConfig = {
  mode: 'development',
  devtool: 'source-map',
  entry: '/src/app.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: plugins.concat([
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: 'index.html'
    })
  ]),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000, 
    open: true
  },
};

module.exports = () =>  clientConfig;
