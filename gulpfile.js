var gulp = require('gulp');
var less = require('gulp-less');
var themeDirectoryNames = ['boilerplate', 'mishiro']; // 要素1個だとうまく動かない気がする
var lessPattern = '/*.less';
var watchPattern = '/**/*.less'; // less/以下の変更もwatchする

var generateWatchRegexp = function() {
    return '{' + themeDirectoryNames.join() + '}' + watchPattern;
};

gulp.task('less', function() {
    for (var directory of themeDirectoryNames) {
        gulp.src(directory + lessPattern)
            .pipe(less({
            }))
            .pipe(gulp.dest(directory));
    }
});

// 一度lessしておく
gulp.task('default', ['less'], function() {
    gulp.watch(generateWatchRegexp(), ['less']);
});
