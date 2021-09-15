const { VueLoaderPlugin } = require('vue-loader');
// const htmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  mode: 'development',

  entry: './examples/main.js',

  output: {
    clean: true,
    dir: 'docs',
    filename: 'kk.js',
    path: path.resolve(__dirname, 'docs')
  },

  // output: {
  //   filename: '[name].[contenthash:8].js',
  //   path: path.resolve(__dirname, 'dist'),
  //   chunkFilename: '[name].[contenthash:8].js',
  // },

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },

      // {
      //   test: /\.(js)$/ ,
      //   exclude: file => (/node_modules/.test(file) && !/\.vue\.js/.test(file)),
      //   loaders: 'babel-loader'
      // },

      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: () => [autoprefixer()],
          //   },
          // },
          'sass-loader',
        ],
      },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{ loader: 'url-loader' }]
      },
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: '[name].[contenthash:8].css',
    //   chunkFilename: '[name].[contenthash:8].css',
    // }),
    // new htmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'public', 'index.html'),
    //   favicon: './public/favicon.ico',
    // }),
  ],

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },

  // optimization: {
  //   moduleIds: 'deterministic',
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         priority: -10,
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },

  devServer: {
    historyApiFallback: true
  }
}
