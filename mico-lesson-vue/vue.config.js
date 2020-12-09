const path = require('path');
const packageName = require('./package').name;

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 216; // dev port

module.exports = {
 
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,

  devServer: {
   
    hot: true,
    historyApiFallback: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
      globalObject: 'this',
    },
  },
};


