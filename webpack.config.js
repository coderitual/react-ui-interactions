const path = require('path')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: './public/index.html'
    })
  ],
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
