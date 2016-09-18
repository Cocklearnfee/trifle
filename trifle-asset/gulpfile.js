//插件引入
var gulp = require('gulp'); 								//gulp 模块
var del = require('del');
var sass = require('gulp-sass'); 							//sass 编译模块
var concat = require('gulp-concat');           				//合并
var jshint = require('gulp-jshint');           				//js规范验证
var uglify = require('gulp-uglify');           				//压缩
var rename = require('gulp-rename');          				//文件名命名
var watch = require('gulp-watch');							//监听
var handlebars = require('gulp-compile-handlebars');		//handlebars 模板
var sourceMaps = require('gulp-sourcemaps');				//源图生成
var cleanCss = require('gulp-clean-css');					//css 压缩
var mergeStream = require('merge-stream');					//合并多个流，返回该留时能够保证串行执行
var gulpIf = require('gulp-if');							//gulp 条件判断
var parseArgs = require('minimist');						//解析命令行参数

var browserSync = require('browser-sync').create();			//browser sync
var reload = browserSync.reload;							//browser reload
var amdOptimize = require('gulp-amd-optimizer'); 			//amd 优化
var concatSourceMap = require('gulp-concat-sourcemap'); 	//源图合并

//数据导入
var handlebars_data = require('./handlebars.json');			//handlebars 模板数据

//环境设置
var env = {
	release: false, //是否是发布版本
	version: '1.0.0' //当前版本好
};

env = parseArgs(process.argv.slice(2), {
	boolean: 'release',
	string: 'version',
	default: {release: process.env.NODE_ENV || ''}
});

gulp.task('set-env', function () {
	env.release = gulp.env.release || false;
	env.version = gulp.env.version || '1.0.0';

	console.log(env);
});

/** handlebars 模板编译 */
gulp.task('html', function () {
	var options = {
		ignorePartials: true, //忽略找不到的模板
		batch: ['./app/html/part']
	};

	return gulp.src('./app/html/*.hb')
			.pipe(handlebars(handlebars_data, options))
			.pipe(rename({extname: '.html'}))
			.pipe(gulp.dest('./html'));
});

/** 开启浏览器同步插件，支持 html/css 变动重新加载 */
gulp.task('serve', ['compile'], function () {
	browserSync.init({
		server: {
			baseDir: './',
			index: 'html/index.html'
		}
	});

	gulp.watch("./app/style/**/*.scss", ['css']);
	gulp.watch("./app/html/**/*.hb", ['html']);
	gulp.watch("./html/*.html").on('change', reload);
});

/** css 编译合并压缩同步浏览器 */
gulp.task('css', function () {
	var options = {outputStyle: 'extend'};
	gulp.src('./app/style/**/*.scss', {base: 'app'})
			.pipe(sourceMaps.init({loadMaps: true}))
			.pipe(sass(options))
			.pipe(concat('app.css'))
			.pipe(sourceMaps.write())
			.pipe(gulp.dest('./dist/style'))
			.pipe(reload({stream: true}));
});

/** css 库压缩合并*/
gulp.task('css-lib', function () {
	gulp.src(['./vendor/bootstrap/dist/css/bootstrap.css'])
			.pipe(sourceMaps.init({loadMaps: true}))
			.pipe(cleanCss({debug: true}, function (details) {
				console.log(details.name + ': ' + details.stats.originalSize);
				console.log(details.name + ': ' + details.stats.minifiedSize);
			}))
			.pipe(concat('lib.min.css'))
			.pipe(sourceMaps.write())
			.pipe(gulp.dest('./dist/style'))
			.pipe(reload({stream: true}));
});

/** js 压缩同步 */
gulp.task('js', function () {
	console.log(gulp.env);
});

gulp.task('compile', ['css', 'css-lib', 'js', 'html']);

/** 清理项目 */
gulp.task('clean', function () {
	return del(['dist', 'html', 'tmp']);
});

/** 帮助 */
gulp.task('help', function () {
	console.log('\nUsage\n  gulp [TASK] [OPTIONS...]\n\nAvailable tasks');

	var tasks = {
		'help       ': '帮助',
		'serve      ': '开启服务',
		'clean      ': '清理生成的文件，包括中间文件',
		'css        ': '编译 scss 文件合并同步浏览器',
		'css-lib    ': '编译 vendor css 文件合并同步浏览器',
		'js         ': '编译 js',
		'html       ': '编译 html 模板',
		'compile    ': '执行 html/css/js 生成任务',
		'set-env    ': '设置环境',
		'release    ': '打包待发布的资源文件'
	};

	for (var i in tasks) {
		console.log('  ' + i + tasks[i]);
	}

	console.log('');
});

/**现有文件打包到发布文件夹中*/
gulp.task('package', function () {
	//TODO: 将 html 和 dist 打包到发布目录下，以版本为子文件夹区分
});

/** 发布任务 */
gulp.task('release', ['set-env']);
/** 默认任务 */
gulp.task('default', ['help']);

gulp.task('debug', ['package'], function () {
	var params = process.argv.slice(2);
	console.log(params);
	var original = parseArgs(params);
	console.log(original);
	console.log('after parse');
	console.log('process.env.NODE_ENV: {}', process.env.NODE_ENV);
	console.log(parseArgs(params, {
		default: {
			env: process.env.NODE_ENV || 'production'
		}
	}));
	// console.log(gulp.env);
});