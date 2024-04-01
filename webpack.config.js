const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './client/src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle-[fullhash].js',
    clean: true,
    publicPath: '/' // for deploy to render
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './client/src/index.html' }),
    new MiniCssExtractPlugin({ filename: 'styles-[fullhash].css' }),
    /*new CopyWebpackPlugin({
      patterns: [{
        from: 'static', to: 'static'
      }]
    })*/
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    },
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { url: false }},
        'sass-loader'
      ]
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { url: false }}
      ]
    }],
  },
  devServer: {
    port: 5678,
    static: {
      directory: path.join(__dirname, 'build')
    },
    historyApiFallback: true
  }
};