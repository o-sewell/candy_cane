'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');

gulp.task('compileSass', () => {
	gulp.src("scss/application.scss")
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./'))
	.pipe(gulp.dest('css'));
});

gulp.task('watchSass', () => {
	gulp.watch('scss/**/*.scss',['compileSass']);
});