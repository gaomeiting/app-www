const path = require('path');
let glob = require('glob')
//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
    let entries = {},
        basename, tmp, pathname, appname;

    glob.sync(globPath).forEach(function(entry) {
        basename = path.basename(entry, path.extname(entry));
        // console.log(entry)
        tmp = entry.split('/').splice(-3);
        console.log(tmp)
        pathname = basename; // 正确输出js和html的路径
        
        // console.log(pathname)
        entries[pathname] = {
            entry:'src/'+tmp[0]+'/'+tmp[1]+'/'+tmp[1]+'.js',
            template:'src/'+tmp[0]+'/'+tmp[1]+'/'+tmp[2],
            filename:tmp[2]
        };
    });
    return entries;
    
}

let htmls = getEntry('./src/views/**/*.html');
// console.log(htmls)
//配置end

function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	pages:htmls,
	/** 区分打包环境与开发环境
	 * process.env.NODE_ENV==='production'  (打包环境)
	 * process.env.NODE_ENV==='development' (开发环境)
	 * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
	 */
	// 基本路径
	baseUrl: '/',
	// 输出文件目录
	outputDir: 'dist',
	// eslint-loader 是否在保存的时候检查
	lintOnSave: true,
	// use the full build with in-browser compiler?
	// https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
	//compiler: false,
	// webpack配置
	// see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@$', resolve('src'))
			.set('assets', resolve('src/assets'))
			.set('components', resolve('src/components'))
			.set('views', resolve('src/views'))
			.set('api', resolve('src/api'))
	},
	//vue: 'vue/dist/vue.js'
	//configureWebpack: () => {},
	//如果想要引入babel-polyfill可以这样写
	/* configureWebpack: (config) => {
		config.entry = ["babel-polyfill", "./src/main.js"]
	}, */
	// vue-loader 配置项
	// https://vue-loader.vuejs.org/en/options.html
	//vueLoader: {},
	// 生产环境是否生成 sourceMap 文件
	productionSourceMap: true,
	// css相关配置
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: true,
		// 开启 CSS source maps?
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {},
		// 启用 CSS modules for all css / pre-processor files.
		modules: false
	},
	// use thread-loader for babel & TS in production build
	// enabled by default if the machine has more than 1 cores
	parallel: require('os').cpus().length > 1,
	// 是否启用dll
	// See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
	//dll: false,
	// PWA 插件相关配置
	// see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
	pwa: {},
	// webpack-dev-server 相关配置
	devServer: {
		index:'home.html',
		port: 8085, // 端口号
		host: '192.168.100.49',
		https: false, // https:{type:Boolean}
		open: true, //配置自动启动浏览器
		// proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
		proxy: {
			'/api': {
				target: 'http://192.168.100.37:8083/api',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}, // 配置多个代理
	},
	// 第三方插件配置
	pluginOptions: {
		// ...
	}
}