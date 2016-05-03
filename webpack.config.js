const webpack = require('webpack');

module.exports = {
  entry: './src',
  output: {
    path: 'builds',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [{
      test: /\.tag$/,
      exclude: /node_modules/,
      loader: 'riotjs-loader',
      query: {
        style: 'sass'
      }
    }],
    loaders: [{
      test: /\.scss$/,
      loaders: ["style", "css", "sass"],
    }, {
      test: /\.js/,
      loader: 'babel',
      include: __dirname + '/src',
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }],
  }
};