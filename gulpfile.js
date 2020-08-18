// gulpfile.js

var path = require('path')
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var cssWrap = require('gulp-css-wrap')

var customThemeName = '.red-theme'

gulp.task('default', function() {
  return gulp.src( path.resolve('./src/assets/red-theme.css'))
    .pipe(cssWrap({selector: customThemeName}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'))
})