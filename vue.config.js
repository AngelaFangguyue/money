const path = require("path");//这是node.js的一个模块，可以用来做path
//import path = require("path");//这是node.js的一个模块，可以用来做path

module.exports = {
  lintOnSave: false,
  // //添加一个chainWebpack，是个函数，接收一个config，
  // chainWebpack:config=>{
  //   const dir = path.resolve(__dirname,'src/assets/icons')//确定icon所在的目录;__dirname就是当前目录，在这里就是根目录
  //
  //   //config,是vue把webpack的api封装了暴露给我们的对象,用来操作webpack
  //   config.module
  //     .rule('svg-sprite')
  //     .test(/\.svg$/)
  //     .include.add(dir).end()//包含icons的目录
  //     .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false})//options里的意思是不要将其解析成字符串
  //     .end()
  //   config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite:true}])//配置一下插件，使用的是svg-sprite-loader/plugin文件
  //   config.module.rule('svg').exclude.add(dir)//其他svg loader排除 icons目录
  // }
  chainWebpack: config => {
    const dir = path.resolve(__dirname, "src/assets/icons");

    config.module
      .rule("svg-sprite")
      .test(/\.svg$/)
      .include.add(dir).end() // 包含 icons 目录
      .use("svg-sprite-loader").loader("svg-sprite-loader").options({extract: false}).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options=>({...options,plugins:[{removeAttrs:{attrs:'fill'}}]}))

    config.plugin("svg-sprite").use(require("svg-sprite-loader/plugin"), [{plainSprite: true}]);
    config.module.rule("svg").exclude.add(dir); // 其他 svg loader 排除 icons 目录

  }
};
