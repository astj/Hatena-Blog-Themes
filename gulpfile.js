var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var changed = require('gulp-changed');
var themeDirectoryNames = ['boilerplate', 'mishiro']; // 要素1個だとうまく動かない気がする
var lessPattern = '/*.less';
var watchPattern = '/**/*.less'; // less/以下の変更もwatchする
var dropboxPattern = '/*.css'; // 今の所配置するのはcssだけ
var dropboxDirectoryPath = process.env.HOME + '/Dropbox/webfiles';

var directoryGlob = function() {
    return '{' + themeDirectoryNames.join() + '}';
};

gulp.task('less', function() {
    gulp.src(directoryGlob() + lessPattern)
        .pipe(plumber({errorHandler: notify.onError("gulp Error happend! <%= error.message %>")}))
        .pipe(less({
        }))
        .pipe(gulp.dest('.'));
});

// dropbox にコピーして素早くブラウザ確認できるようにする
gulp.task('deploy-dropbox', function() {
    gulp.src(directoryGlob() + dropboxPattern)
        .pipe(changed(dropboxDirectoryPath))
        .pipe(gulp.dest(dropboxDirectoryPath));
});

// 一度lessしておく
gulp.task('default', ['less'], function() {
    gulp.watch(directoryGlob() + watchPattern,  ['less']);
    gulp.watch(directoryGlob() + dropboxPattern,  ['deploy-dropbox']);
});
