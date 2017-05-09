var path  = require('path');

module.exports = {
  entry: {
    nowaAukcja: './src/page_script/nowaAukcja.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'app','static','js')
  },
  devtool:'eval'

}