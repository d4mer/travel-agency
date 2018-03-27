var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('default', function(){
  console.log('Wow, it works');
})

gulp.task('watch', function(){

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });
  watch('./app/index.html', function(){
    browserSync.reload();
  })

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('insertCss');
  })
})

gulp.task('insertCss', ['styles'], function() {
  return gulp.src('./app/temp/styles/style.css')
  .pipe(browserSync.stream());
})
