var gulp = require('gulp'); 					//gulp 模块
var sass = require('gulp-sass'); 				//sass 编译模块
var concat = require('gulp-concat');           	//合并
var jshint = require('gulp-jshint');           	//js规范验证
var uglify = require('gulp-uglify');           	//压缩
var rename = require('gulp-rename');          	//文件名命名
var watch = require('gulp-watch');				//监听
var amdOptimize = require('gulp-amd-optimizer'); //require优化
var concatSourceMap = require('gulp-concat-sourcemap'); //源图支持

//定义任务
gulp.task("sass:compile", function () {

});

gulp.task("sass:watch", function () {

});


//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
	gulp.src('src/less/index.less') //该任务针对的文件
			.pipe(sass()) //该任务调用的模块
			.pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});

//定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
gulp.task('default', ['testLess', 'elseTask']);

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径