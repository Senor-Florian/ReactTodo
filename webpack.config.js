const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

module.exports = {
  entry: {
    app: [__dirname, 'src/index.jsx'].join('/')
  },
  output: {
    path: [__dirname, 'public'].join('/'),
    filename: 'bundleFile.js'
  },
  resolve: {
    extensions: ['root', '.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true })
  ]
};
