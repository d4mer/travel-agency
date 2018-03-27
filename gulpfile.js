var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('default', function(){
  console.log('Wow, it works');
})

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssImport, nested, cssVars, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
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
