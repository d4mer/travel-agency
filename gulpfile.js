var gulp = require('gulp');
var watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('default', function(){
  console.log('Wow, it works');
})

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([nested, cssVars, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
})

gulp.task('watch', function(){

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  })
})
