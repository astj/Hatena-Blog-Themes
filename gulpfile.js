var gulp = require('gulp');
var less = require('gulp-less');
var themeDirectoryNames = ['boilerplate', 'dummy']; // 増えたら増やす。1個だとなんかうまく動かないのでdummy入れておく。
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

gulp.task('default', function() {
    gulp.watch(generateWatchRegexp(), ['less']);
});
