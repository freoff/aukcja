const gulp = require('gulp');
const sync = require('gulp-directory-sync');
const debug = require('gulp-debug');
const ts = require('gulp-typescript');

var tsGlob = ['src/**/*.*s','!src/page_script/**/*','!src/static/**/*'];
var tsProject = ts.createProject('tsconfig.json', ts.reporter.defaultReporter());
gulp.task('syncFile', function () {
    return gulp.src('')
        .pipe(sync('src/views', 'app/views', {
            printSummary: true
        }))
        .pipe(sync('src/static', 'app/static', {
            printSummary: true
        }));
});
gulp.task('default',['syncFile'], function () {
    gulp.watch(['src/views/**/*', 'src/static/**/*'], ['syncFile']);
    

});
gulp.task('tscompile', function () {
    return gulp.src(tsGlob).pipe(debug()).pipe(tsProject()).js.pipe(debug()).pipe(gulp.dest('./app/'));
});
//