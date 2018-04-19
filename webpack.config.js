var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  // 插件项
  plugins: [commonsPlugin],

  // 页面入口文件配置
  entry: {
    index: './src/js/page/index.js'
  },

  // 入口文件   输出配置
  output: {
    // 最终存放位置
    path: 'dist/js/page',
    filename: '[name].js'
  },

  module: {
    // 加载器配置
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },

  resolve: {
    // 其他解决方案配置
    root: {

      //查找module的话从这里开始查找
      root: 'E:/woods/Learning/Webpack/src',

      // 自动拓展文件后缀名, 意味着我们require模块可以省略不些后缀名
      extensions: ['', '.js', '.json', '.scss'],

      // 模块别名定义，方便在后续直接饮用别名，无须写常常的地址!
      alias: {
        // Somthing code
        // key: path  ex: aa: 'js/...' 
      }
    }
  }

}