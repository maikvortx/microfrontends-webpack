const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3050,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            ["@babel/preset-react", { "runtime": "automatic" }]
          ],
        },
      },
    ],
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'boletador',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      // shared: {
      //   react: { singleton: true },
      //   'react-dom': { singleton: true }
      // },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
