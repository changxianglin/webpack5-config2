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
      // {
      //   test: /\.js$/,
      //   loader: './loaders/test-loader.js',
      // }
      {
        test: /\.js$/,
        // use: [
        //   './loaders/demo/test1',
        //   './loaders/demo/test2',
        // ]
        // loader: './loaders/demo/test3.js',
        // use: ['./loaders/demo/test4.js', './loaders/demo/test5.js', './loaders/demo/test6.js']
        // loader: './loaders/clean-log-loader.js',
        loader: './loaders/banner-loader',
        options: {
          author: '张三',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpakcPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    })
  ]
}