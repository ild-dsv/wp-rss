const path = require('path')
const webpack = require('webpack')

module.exports = {
  name: 'server',
  target: 'node',
  entry: [
    './src/server/render.js'
  ],
  mode: 'development',
  output: {
    filename: 'dev-server-bundle.js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '../build'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.(jpg|svg|png|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '/images/[name].[ext]',
            emitFile: false
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
}
