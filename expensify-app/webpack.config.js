const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // Run all files ending with .js through the babel-loader...
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      // Tell webpack how to handle styles
      // Tell webpack how to load scss files
      {
        test: /\.s?css$/,
        // use an array of loaders this time, not just one
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  // set up source maps so that console error messages actually reference the correct file vs bundle.js
  devtool: 'cheap-module-eval-source-map',
  // use the webpack-dev-server instead of live-server
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    // Always return index.html - allows SPA
    historyApiFallback: true
  }
};
