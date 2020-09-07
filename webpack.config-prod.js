const path = require('path');

module.exports = {
    // inform webpack that I am building a bundle for nodejs rather than for the
    // browser
    target: 'node',
  
    // tell webpack the root file of my server application
    entry: './src/index.js',
  
    // tells webpack where to put the output file generated
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
    },
  
    // tells webpack to run babel on every file it runs through
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [
              'react',
              'stage-0',
              ['env', { targets: { browsers: ['last 2 versions'] } }]
            ]
          }
        }
      ]
    }
  };