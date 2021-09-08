const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    allowedHosts: [
      '.huyanan.site'
    ],
    static: [
      {
        directory: path.join(__dirname, 'data'),
        publicPath: '/life_restart/data',
      },
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/life_restart/public',
      },
      {
        directory: path.join(__dirname, 'view'),
        publicPath: '/life_restart/view',
      },
      {
        directory: path.join(__dirname, 'src'),
        publicPath: '/life_restart/src',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    clean: true,
  },
  // resolve: {
  //   extensions: ['.js'],
  // },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                "targets": "> 0.25%, not dead",
                "useBuiltIns": "usage",
                "corejs": "3.8.3",
              }
            ]
          ]
        }
      }
    }]
  }
};