const {src, dest, series } = require('gulp');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');

function minify() {
    return src('./*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./'));
}

exports.default = series(minify);
