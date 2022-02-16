const paths = require('./paths');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const dotenv = require('dotenv-flow').config( {
  path: '../.env.dev'
});
const port = 8080;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },
  plugins: [
    // Recharge uniquement ce qu'il y a besoin
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin( {
      "process.env": JSON.stringify(dotenv.parsed)
    }),
  ],
  module: {
    rules: [
      // Styles
      {
        test: /\.(s?css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },

  devServer: {
    client: {
      overlay: true,
      logging: 'warn',
    },
    devMiddleware: {
      stats: 'minimal',

    },
    static: {
      directory: paths.build,
    },
    historyApiFallback: true,
    open: false,
    compress: true,
    hot: true,
    port,
  },
});
