const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: [
        'style',
        'css',
        'sass'
      ],
      include: PATHS.app
    }, {
      test: /\.jsx?$/,
      loaders: [
        'babel?cacheDirectory'
      ],
      include: PATHS.app
    }, {
      test: /\.(png|jpg)$/,
      loader: 'file-loader'
    }]
  }
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: 8000,
      proxy: {
        '/api/*': {
          target: 'http://localhost:3000/',
          secure: false,
          cookieDomainRewrite: true,
          changeOrigin: true
        }
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  })
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    plugins: [
      new copyWebpackPlugin([
        {
          context: PATHS.build,
          from: '**/*',
          to: '../../../target/classes/static/'
        }
      ]),
    ]
  })
}
