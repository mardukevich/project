const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const clientConfig = {
  mode: 'development',
  devtool: 'source-map',
  entry: '/src/app.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules:[
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
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

module.exports = clientConfig;
