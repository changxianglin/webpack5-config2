const path = require("path")
const HtmlWebpakcPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: './loaders/test-loader.js',
      }
    ]
  },
  plugins: [
    new HtmlWebpakcPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    })
  ]
}