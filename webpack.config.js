const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');


var plugins = [
  new CopyWebpackPlugin([{from: 'view'}]),
  new ExtractTextPlugin('css/style.css'),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: {
    'js/bundle.js': path.resolve(__dirname, 'app/main.js'),
    'css/style.css': path.resolve(__dirname, 'app/stylesheets/main.scss')
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name]'
  },
  module: {
    rules: [{
      exclude: /(node_modules)/,
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/react']
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css-loader?-minimize', 'postcss-loader', 'sass-loader'])
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  stats: {
    colors: true
  },
  plugins: plugins
};
