const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


function runSass() {
  return gulp.src('./app/scss/**/*.scss')
             .pipe(sass())
             .pipe(gulp.dest('./app/css'))
             .pipe(browserSync.stream());
}


function reloadBrowser(done) {
  browserSync.reload();
  return done();
}

function startBrowserSync() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  })
}


gulp.task('sass', runSass);


gulp.task('watch', gulp.series('sass', function(done) {
  startBrowserSync();
  gulp.watch('./app/scss/**/*.scss', runSass);
  gulp.watch('./app/*html', reloadBrowser);
//   gulp.watch('src/js/**/*.js', reloadBrowser);
  done();
}));