
const webpack = require('webpack')

// 使用的是webpack @3.x
module.exports = {
  plugins: [
    new webpack.BannerPlugin('北京烤鸭的翻版')
  ],

  //  调试,只在开发阶段使用
  devtool: 'eval-source-map',

  // 页面入口文件配置
  entry: {
    index: __dirname + "/app/main.js"
  },

  // 入口文件   输出配置
  output: {
    // 最终存放位置
    path:  __dirname + '/public',
    filename: 'bundle.js'
  },


  // 针对webpack-dev-server@2.x
  // 本地服务器配置 
  // 更多配置https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: "./public", //本地服务器所加载的页面所在的目录, 通常用于静态资源

    // 依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    historyApiFallback: true,

    // 当源文件改变时会自动刷新页面
    inline: true
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
          }
        ]
      }
    ]
  },

  // resolve: {
  //   // 其他解决方案配置
  //   root: {

  //     //查找module的话从这里开始查找
  //     root: 'E:/woods/Learning/Webpack/src',

  //     // 自动拓展文件后缀名, 意味着我们require模块可以省略不些后缀名
  //     extensions: ['', '.js', '.json', '.scss'],

  //     // 模块别名定义，方便在后续直接饮用别名，无须写常常的地址!
  //     alias: {
  //       // Somthing code
  //       // key: path  ex: aa: 'js/...' 
  //     }
  //   }
  // }

}