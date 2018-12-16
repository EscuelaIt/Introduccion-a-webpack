const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
      test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env']]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "../index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: 'node_modules/@webcomponents/webcomponentsjs/',
        to: path.resolve(__dirname, 'public/js/webcomponentsjs/')
      }
    ])
  ],
  
}
