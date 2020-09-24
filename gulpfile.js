const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => (
  gulp
    .src('./src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
));

gulp.task('pug', () => (
  gulp
    .src('./src/pug/pages/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./dist/'))
));

gulp.task('default', () => {
  gulp.watch('./src/scss/**/*.scss', gulp.series('styles'));
  gulp.watch('./src/pug/**/*.pug', gulp.series('pug'));
});
