/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, '../src/');
const dist = path.resolve(__dirname, '../dist/');

module.exports = {
  entry: `${src}/client.jsx`,

  output: {
    filename: 'bundle.js',
    path: dist,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.json?$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        }],
      },
      // the url-loader uses DataUrls. 
      // the file-loader emits files. 
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ],
  },

  plugins: [new HtmlWebpackPlugin({
    template: `${src}/index.tpl.html`,
  })],
};
