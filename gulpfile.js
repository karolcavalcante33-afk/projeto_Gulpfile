const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// SASS → CSS
function compilaSass() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
}

// JS
function comprimeJs() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

// Imagens
function comprimeImagens() {
  return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

// ✅ TASK DEFAULT (OBRIGATÓRIA)
exports.default = gulp.series(
  compilaSass,
  comprimeJs,
  comprimeImagens
);
