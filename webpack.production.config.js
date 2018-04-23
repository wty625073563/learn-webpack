// 产品阶段

// 引入插件
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  plugins: [
    new webpack.BannerPlugin('北京烤鸭的翻版'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin(),

    /* 优化插件 */

    //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，
    // 并为它们分配最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),

    // 压缩js代码
    new webpack.optimize.UglifyJsPlugin(),

    // 分离css和js文件
    new ExtractTextPlugin('style.css'),


    // 清除build的文件缓存
    new CleanWebpackPlugin('build/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
    })
  ],

  // 产品阶段设为null
  devtool: 'null',

  // 页面入口文件配置
  entry: __dirname + "/app/main.js",

  // 入口文件   输出配置
  output: {
    // 最终存放位置
    path:  __dirname + '/build',
    filename: 'bundle-[hash].js'
  },


  devServer: {
    contentBase: "./build", 
    historyApiFallback: true,
    inline: true,
    hot: true
  },


  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true
            }
          }, {
              loader: "postcss-loader"
          }]
        })
      }
    ]
  },

}