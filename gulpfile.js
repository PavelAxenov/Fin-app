const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass-compile', function() {
    return gulp.src('./styles/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/css/'))
})

gulp.task('watch', function() {
    gulp.watch('./styles/scss/**/*.scss', gulp.series('sass-compile'))
})
