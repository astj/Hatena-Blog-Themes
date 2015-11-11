var gulp = require('gulp');
var less = require('gulp-less');
var themeDirectories = ['./boilerplate/'];
var lessPattern = '*.less';

gulp.task('less', function() {
    for (var directory of themeDirectories) {
        gulp.src(directory + lessPattern)
            .pipe(less({
            }))
            .pipe(gulp.dest(directory));
    }
});

gulp.task('default', function() {
    // place code for your default task here
});
