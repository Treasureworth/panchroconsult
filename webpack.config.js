module.exports = {
    module: {
      entry: {
        app: './src/pages/_app.js'
      },
      rules: [
        {
          test: /\.(js|jsx|svg)$/,
          exclude: /node_modules/,
          use: [{
            loader: "babel-loader"
          },{
            loader: '@svgr/webpack'
          }
        ]
        }
      ]
    }
  };