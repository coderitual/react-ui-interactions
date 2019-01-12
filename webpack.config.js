const HtmlWebPackPlugin = require('html-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

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
    new HtmlWebPackPlugin({
      template: './public/index.html'
    }),
    new ErrorOverlayPlugin()
  ],
  devtool: 'cheap-module-source-map'
}
