const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  watch: true,
  output: {
    pathinfo: true,
    filename: 'bundle.js',
  },
  entry: [path.resolve(__dirname, '../src')],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: { plugins: () => [autoprefixer] },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    contentBase: path.resolve(__dirname, '../assets'),
    historyApiFallback: true,
  },
};
