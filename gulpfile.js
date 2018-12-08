var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = rquire('gulp-postcss'),
autoprefixer = rquire('autoprefixer');


gulp.task('default', function(){
  console.log("hooray!!");
});

gulp.task('html', function(){
  console.log("html issue!!!");
});

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
