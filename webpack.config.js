const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: { main: './src/index.jsx' },
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: 'main.js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './build'),
    compress: true,
    port: 3000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
}