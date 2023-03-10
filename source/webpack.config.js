const path = require("path")
const HtmlWebpakcPlugin = require('html-webpack-plugin')
const TestPlugin = require('./plugins/test-plugin')

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
      },
      {
        test: /\.js$/,
        loader: "./loaders/babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.(png|jpe?g)$/,
        loader: "./loaders/file-loader",
        type: "javascript/auto",
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: ['./loaders/style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpakcPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new TestPlugin(),
  ]
}