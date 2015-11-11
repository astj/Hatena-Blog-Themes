var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var themeDirectoryNames = ['boilerplate', 'mishiro']; // 要素1個だとうまく動かない気がする
var lessPattern = '/*.less';
var watchPattern = '/**/*.less'; // less/以下の変更もwatchする

var directoryGlob = function() {
    return '{' + themeDirectoryNames.join() + '}';
};

gulp.task('less', function() {
    gulp.src(directoryGlob() + lessPattern)
        .pipe(plumber())
        .pipe(less({
        }))
        .pipe(gulp.dest('.'));
});

// 一度lessしておく
gulp.task('default', ['less'], function() {
    gulp.watch(directoryGlob() + watchPattern,  ['less']);
});
