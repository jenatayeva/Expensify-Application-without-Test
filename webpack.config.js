const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    mode: 'production',
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // hmr: process.env.NODE_ENV === "development"
              }
            },
            {
             loader: "css-loader",
              options: {
                sourceMap: true,
              }
            },
            {
              loader: "sass-loader",
               options: {
                 sourceMap: true,
               }
             }
          ]
    
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      static: path.join(__dirname, 'public'),
      historyApiFallback: true,
      hot: true
    },
    stats: {
      errorStack: true,
    },
  };
};
