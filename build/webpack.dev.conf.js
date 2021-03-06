'use strict'
const config = require('../config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const SpritesmithPlugin = require('webpack-spritesmith')
const express = require('express')
// var glob = require('glob')

// var history = require('connect-history-api-fallback');
// var connect = require('connect');
// var app = express()
// app.use(require('connect-history-api-fallback')())
  // .use(history())
  // .listen(8083);
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index/index.html',
    //   template: 'index/index.html',
    //   inject: true,
    //   // chunks: ['app']
    // }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
  ]),
  new SpritesmithPlugin({
      src: {
          cwd: path.resolve(__dirname, '../src/assets/imgs/icons'),
          glob: '*.png'
      },
      target: {
          image: path.resolve(__dirname, '../static/sprites/sprite.png'),
          css: path.resolve(__dirname, '../static/sprites/sprite.less')
      },
      apiOptions: {
          cssImageRef: "../../static/sprites/sprite.png"
      }
  })

  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})

var pages = utils.getEntries('./src/page/**/*.html')
for(var page in pages) {
  // 配置生成的html文件，定义路径等
  var conf = {
    filename: page + '.html',
    template: pages[page], //模板路径
    inject: true,
    // excludeChunks 允许跳过某些chunks, 而chunks告诉插件要引用entry里面的哪几个入口
    // 如何更好的理解这块呢？举个例子：比如本demo中包含两个模块（index和about），最好的当然是各个模块引入自己所需的js，
    // 而不是每个页面都引入所有的js，你可以把下面这个excludeChunks去掉，然后npm run build，然后看编译出来的index.html和about.html就知道了
    // filter：将数据过滤，然后返回符合要求的数据，Object.keys是获取JSON对象中的每个key
    excludeChunks: Object.keys(pages).filter(item => {
      return (item != page)
    })

  }
  // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
  devWebpackConfig.plugins.push(new HtmlWebpackPlugin(conf))
}
// function getEntry(globPath) {
//   var entries = {},
//     basename, tmp, pathname;
//   if (typeof (globPath) != "object") {
//     globPath = [globPath]
//   }
//   globPath.forEach((itemPath) => {
//     glob.sync(itemPath).forEach(function (entry) {
//       basename = path.basename(entry, path.extname(entry));
//       if (entry.split('/').length > 4) {
//         tmp = entry.split('/').splice(-3);
//         pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
//         entries[pathname] = entry;
//       } else {
//         entries[basename] = entry;
//       }
//     });
//   });
//   return entries;
// }
// var pages = getEntry('./src/page/**/*.html');
// for (var pathname in pages) {
//   // 配置生成的html文件，定义路径等
//   var conf = {
//     filename: pathname + '.html',
//     template: pages[pathname],   // 模板路径
//     inject: true,              // js插入位置
//     chunksSortMode: 'dependency',
//     // chunks: [pathname]
//     // excludeChunks: Object.keys(pages).filter(item => {
//     //   return (item != page)
//     // })
//
//   };
//   if (pathname in devWebpackConfig.entry) {
//     // conf.chunks = ['manifest', 'vendor', pathname];
//     conf.hash = true;
//   }
//   devWebpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
// }