const path = require('path')

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'js', 'index.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  }
}
