const path = require('path')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

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
    new CleanWebpackPlugin(['dist']),
    new ErrorOverlayPlugin(),
    new WorkboxPlugin.GenerateSW({ clientsClaim: true, skipWaiting: true }),
    new HtmlWebPackPlugin({ template: './public/index.html' })
  ],
  devtool: 'cheap-module-source-map',
  devServer: { historyApiFallback: true },
  output: { filename: '[name].[hash].js', path: path.resolve(__dirname, 'dist') }
}
