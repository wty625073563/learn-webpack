// 产品阶段

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new webpack.BannerPlugin('北京烤鸭的翻版'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  // 产品阶段设为null
  devtool: 'null'

  // 页面入口文件配置
  entry: {
    index: __dirname + "/app/main.js"
  },

  // 入口文件   输出配置
  output: {
    // 最终存放位置
    path:  __dirname + '/build',
    filename: 'bundle.js'
  },


  devServer: {
    contentBase: "./public", 
    historyApiFallback: true,
    inline: true,
    hot: true
  },


  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
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
            // loader: 'postcss-loader'
          }]
        })

        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },

}