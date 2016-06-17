/*
	gulpfile.js   author:jiaan.zhou
*/

var gulp = require('gulp');
var gulpLess = require('gulp-less');


gulp.task('allLess', function(){
	gulp.src(['public/less/*.less'])
	.pipe(gulpLess()).pipe(gulp.dest('public/css'));
});

gulp.task('lessWatch', function(){
	gulp.watch('public/less/', ['allLess']);
});