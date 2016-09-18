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
var sourcemaps = require('gulp-sourcemaps');				//源图生成


var browserSync = require('browser-sync').create();			//browser sync
var reload = browserSync.reload;							//browser reload
var amdOptimize = require('gulp-amd-optimizer'); 			//amd 优化
var concatSourceMap = require('gulp-concat-sourcemap'); 	//源图合并

//数据导入
var handlebars_data = require('./handlebars.json');			//handlebars 模板数据

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
gulp.task('serve', function () {
	browserSync.init({
		server: {
			baseDir: './',
			index: 'html/index.html'
		}
	});

	gulp.watch("./app/style/**/*.scss", ['sass']);
	gulp.watch("./app/html/**/*.hb", ['html']);
	gulp.watch("./html/*.html").on('change', reload);
});

/** sass 编译合并压缩同步浏览器 */
gulp.task('sass', function () {
	var options = {outputStyle: 'extend'};
	return gulp.src('./app/style/**/*.scss', {base: 'app'})
			.pipe(sourcemaps.init({loadMaps: true}))
			.pipe(sass(options))
			.pipe(concat('all.css'))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('./dist/style'))
			.pipe(reload({stream: true}));
});

/** js 压缩同步 */
gulp.task('js', function () {
});

gulp.task('compile', ['sass', 'js', 'html']);

/** 清理项目 */
gulp.task('clean', function () {
	del(['dist', 'html', 'tmp']);
});

/** 帮助 */
gulp.task('help', function () {
	console.log('\nUsage\n  gulp [TASK] [OPTIONS...]\n\nAvailable tasks');

	var tasks = {
		'help       ': '帮助',
		'serve      ': '开启服务',
		'clean      ': '清理生成的文件，包括中间文件',
		'sass       ': '编译 scss 文件合并同步浏览器',
		'js         ': '编译 js',
		'html       ': '编译 html 模板',
		'compile    ': '执行 html/css/js 生成任务'
	};

	for (var i in tasks) {
		console.log('  ' + i + tasks[i]);
	}

	console.log('');
});

/** 默认任务 */
gulp.task('default', ['help']);