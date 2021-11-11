const path = require('path');
const fs = require('fs');
const packageJSON = require('./package.json');

let nodeModules = {};
fs.readdirSync('node_modules')
  .filter((x) => {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach((mod) => {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  mode: 'development',
  entry: './server/app.js',
  target: 'node',
  output: {
    path: path.join(__dirname, packageJSON.buildFolder),
    filename: 'app.js',
  },
  externals: nodeModules,
};
