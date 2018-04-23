
// 引入插件
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 使用的是webpack @3.x
module.exports = {
  plugins: [
    // 注释插件
    new webpack.BannerPlugin('北京烤鸭的翻版'),

    // 依据app下 index.tmpl.html模板生成自动引用打包之后js文件的index.html
    // 其实就是有很多js就不用自己受用引用啦
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),

    // 热加载插件( 自动刷新实时预览修改后的效果 )
    // HMR
    // 针对这此有使用到react 用到热加载的话就要配合babel的react-transform-hmr 插件来使用
    // 才可以实时预览
    new webpack.HotModuleReplacementPlugin()
  ],

  // 生成Source Maps（使调试更容易）
  // 调试,只在开发阶段使用
  devtool: 'eval-source-map',

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


  // 针对webpack-dev-server@2.x
  // 本地服务器配置 
  // 更多配置https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: "./build", //本地服务器所加载的页面所在的目录, 通常用于静态资源

    // 依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    historyApiFallback: true,

    // 当源文件改变时会自动刷新页面
    inline: true,

    // 开启热加载

    // 热加载
    hot: true
  },


  module: {
    // 装载器配置

    // test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
    // loader：loader的名称（必须）
    // include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
    // query：为loaders提供额外的设置选项（可选）

    rules: [
      {
        test: /(\.jsx|\.js)$/,
        // loaders: 'babel',
        use: {
          loader: 'babel-loader',
          options: { presets: [ 'env', 'react' ] }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true
            }
          },{
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },

}