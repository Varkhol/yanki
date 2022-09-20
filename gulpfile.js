const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass'));
 
gulp.task('scss', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./'));
});
 
gulp.task('default', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('scss'));
});