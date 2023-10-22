const path = require('path');

module.exports = {
  mode: process.env.NETLIFY ? 'production' : 'development',
  entry: './assets/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'static', 'js'),
  }
};
