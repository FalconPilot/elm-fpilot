const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = [
  'PORT'
].reduce((acc, key) => ({ ...acc, [key]: process.env[key] }))

Object.entries(env).forEach(([key, val]) => {
  if (!val) {
    throw new Error(`Environment variable ${key} should be defined !`)
  }
})

module.exports = {
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
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: env.PORT,
    historyApiFallback: true
  }
}
