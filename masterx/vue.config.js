const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	configureWebpack: { // webpack 配置
		output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
			filename: `static/js/[hash].js`
		},
		resolve: {
			alias: {
				'@': resolve('src')
			}
		}
	}
}