const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');
const ASSETS_DIR = path.resolve(__dirname, 'assets');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: APP_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body',
  favicon: 'assets/images/favicon.ico'
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: 'styles.css'
});

module.exports = {
  entry: APP_DIR + '/index.js',
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    sourceMapFilename: '[name].map'
  },
  plugins: [
    HtmlWebpackPluginConfig,
    MiniCssExtractPluginConfig
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader?name=[path][name].[ext]',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      components: APP_DIR + '/components',
      assets: ASSETS_DIR
    },
    extensions: ['.js', '.json', '.jsx']
  }
};
