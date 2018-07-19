const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: APP_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    sourceMapFilename: '[name].map'
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
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
    extensions: ['.js', '.json', '.jsx']
  }
};
