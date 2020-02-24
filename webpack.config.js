const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: (
    process.env.NODE_ENV === 'development'
      ? 'development'
      : 'production'
  ),
  entry: {
    elm: [
      path.join(__dirname, 'src', 'elm', 'App.elm'),
      path.join(__dirname, 'src', 'elm', 'Overlay.elm')
    ],
    main: path.join(__dirname, 'src', 'js', 'index.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.elm$/,
      exclude: [/elm-stuff/, /node_modules/],
      use: {
        loader: 'elm-webpack-loader',
        options: {
          files: [
            path.resolve(__dirname, 'src', 'elm', 'App.elm'),
            path.resolve(__dirname, 'src', 'elm', 'Overlay.elm')
          ]
        }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      path: path.join(__dirname, 'static', 'index.html'),
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: process.env.PORT,
    historyApiFallback: true
  }
}
