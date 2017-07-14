var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: ["babel-polyfill", APP_DIR + '/index.jsx'],
  // entry: [APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    libraryTarget: 'var',
    library: 'EntryPoint'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }
    ],
  },
    externals: {
      'tableSetup': 'tableSetup',
      'store': 'store',
      'mountingDomID': 'mountingDomID',
    }
};

module.exports = config;