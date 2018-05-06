var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename');


var config = {
   mode:{
     css: {
       render: {
         css: {
           template: './gulp/templates/sprites.css'
         }
       }
     }
   }
}

gulp.task('createSprite', function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
  .pipe(svgSprite(config))
  .pipe(gulp.dest('./app/temp/sprites/'));
});

gulp.task('copySprite', ['createSprite'] function() {
  return gulp.src('./app/temp/sprites/css/*.css')
  .pipe(rename('_sprites.css'))
  .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('icons', ['createSprite', 'copySprite']);
