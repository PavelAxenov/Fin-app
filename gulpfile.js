const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile', function() {
    return gulp.src('./blocks/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./blocks/css/'))
})

gulp.task('watch', function() {
    gulp.watch('./blocks/scss/**/*.scss', gulp.series('sass-compile'))
})
