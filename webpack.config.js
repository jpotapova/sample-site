const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
     contentBase: './public'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  }
};
