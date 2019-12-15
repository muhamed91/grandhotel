const gulp  = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css

function runSass() {

    // 1. Where is my scss file
    return gulp.src('./app/scss/**/*.scss')

    // 2. Pass that file through sass compiler
    .pipe(sass().on('error', sass.logError))

    // 3. Wheere do i save the Compiled CSS?
    .pipe(gulp.dest('./app/css'))

    // stream change to all browser
    .pipe(browserSync.stream());

}


function watch() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch('./app/scss/**/*scss', runSass);
    gulp.watch('./app/*.html').on('change', browserSync.reload)
    gulp.watch('/app/js/**/*.js').on('change', browserSync.reload);
}


exports.runSass = runSass;
exports.watch = watch;

