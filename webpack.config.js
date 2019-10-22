const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname,'./src/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module:{
    rules: [
      {test: /\.css$/, use: ['style-loader','css-loader']},
      {test: /\.(png|jpg|jpeg|bmg|gif)$/, use: 'url-loader?limit=10000&name=[name].[ext]'},
      {test: /\.js$/, use: 'babel-loader' , exclude: /node_modules/},
      {test: /\.vue$/, use: 'vue-loader'},
    ]
  }

};