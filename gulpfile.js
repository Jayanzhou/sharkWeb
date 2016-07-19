/*
	gulpfile.js   author:jiaan.zhou
*/

var gulp = require('gulp');
var gulpLess = require('gulp-less');

function generate(file){
	var gulp_task = gulp.src(file)
		.pipe(gulpLess()).pipe(gulp.dest('public/css'));
	console.timeEnd('耗时');
	console.log('-------------------------------编译结束----------------------------------');
}

gulp.task('allLess', function(){
	gulp.src(['public/less/*.less'])
	.pipe(gulpLess()).pipe(gulp.dest('public/css'));
});

gulp.task('lessWatch', function(){
	var watcher = gulp.watch('public/less/**/*.less');
	watcher.on('change', function(event){
		var file = event.path;
		console.log('-------------------------------编译执行----------------------------------');
		console.log(file);
		console.time('耗时');
		generate(file);
	});
});