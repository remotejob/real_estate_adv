const webpack = require('webpack');
const path = require('path');

//const nodeEnv = process.env.NODE_ENV || 'development';
//const isProd = nodeEnv === 'production';

module.exports = {

  context: path.join(__dirname, './client'),
  entry: {
    js: './index.js',
    vendor: ['react']
  },
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file',
        query: {
          name: '[name].[ext]'
        }
      },
      {
          test: /\.css$/,
          loaders: [
            'style',
            'css'
          ]
        },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          // 'react-hot',
          'babel-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      path.resolve('./client'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    })

  ],
  devServer: {
    contentBase: './client'
    // hot: true
  }
};
