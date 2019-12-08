const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/blitz.js',
  devtool: 'source-map',
  output: {
    filename: 'blitz.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: '$',
  },
  module: {
    rules: [
      {
        test: /.js/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  }
};
