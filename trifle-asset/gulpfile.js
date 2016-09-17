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
var handlebars_data = require('./handlebars.json');			//handlebars 模板数据

var browserSync = require('browser-sync').create();			//browser sync
var reload = browserSync.reload;							//browser reload
var amdOptimize = require('gulp-amd-optimizer'); 			//amd 优化
var concatSourceMap = require('gulp-concat-sourcemap'); 	//源图合并

/** handlebars 模板编译 */
gulp.task('handlebars', function () {
	var options = {
		ignorePartials: true, //忽略找不到的模板
		batch: ['./app/html/part']
	};

	return gulp.src('app/html/*.hb')
			.pipe(handlebars(handlebars_data, options))
			.pipe(rename({extname: '.html'}))
			.pipe(gulp.dest('html'));
});

/** 开启浏览器同步插件，支持 html/css 变动重新加载 */
gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: './',
			index: 'html/index.html'
		}
	});

	gulp.watch("app/style/**/*.scss", ['sass-compile', 'sass-min-concat']);
	gulp.watch("app/html/**/*.hb", ['handlebars']);
	gulp.watch("html/*.html").on('change', reload);
});

/** sass 编译 */
gulp.task('sass-compile', function () {
	var options = {outputStyle: 'compact'};
	return gulp.src('app/style/**/*.scss', {base: 'app'})
			.pipe(sass(options))
			.pipe(gulp.dest('tmp'));
});

/** sass 压缩合并 */
gulp.task('sass-min-concat', ['sass-compile'], function () {
	return gulp.src('tmp/style/**/*.css', {base: 'tmp'})
			.pipe(concat('all.css'))
			.pipe(gulp.dest('dist/style'))
			.pipe(reload({stream: true}));
});

gulp.task('build', ['sass-compile', 'sass-min-concat', 'handlebars']);

/** 清理项目 */
gulp.task('clean', function () {
	del(['dist', 'html', 'tmp']);
});

/** 默认任务 */
gulp.task('default', function () {
	//TODO: 添加使用方法说明
	//安装 gulp-help 插件来扩展现有 task 方法以添加描述。
});