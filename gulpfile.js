const {src, dest, series } = require('gulp');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');

function minify() {
    return src('./src/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./src/css'));
}

exports.default = series(minify);
