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
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      constants: path.resolve(__dirname, 'src/constants'),
      utils: path.resolve(__dirname, 'src/utils'),
      mixins: path.resolve(__dirname, 'src/mixins'),
      'priv-data': path.resolve(__dirname, 'src/priv-data'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
};
