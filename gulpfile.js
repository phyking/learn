var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');
// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src('sources/js/main.js')
      .pipe(uglify())
      .pipe(rename('main.min.js'))
      .pipe(gulp.dest('dist/js'));
});


gulp.task('stylus', function(){
  return gulp.src('sources/styles/style.styl')
  .pipe(stylus())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('dist/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('sources/js/*.js', ['scripts']);
  gulp.watch('sources/styles/style.styl',['stylus']);
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);
