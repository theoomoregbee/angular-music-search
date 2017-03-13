/**
 * Created by Theophy on 3/13/17.
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');
var wiredep = require('wiredep').stream;
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-clean-css');
var minifyHtml = require('gulp-htmlmin');
var jshint = require('gulp-jshint');
var webserver = require('gulp-webserver');

var Server = require('karma').Server;

var paths = {
    index: 'index.html',
    dist: 'dist/',
    tmp: 'tmp'
};

gulp.task('webserver', function () {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            port: 8888
        }));
});


gulp.task('webserver-build', function () {
    gulp.src(paths.dist)
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            port: 8888
        }));
});


gulp.task("lint", function () {
    gulp.src("./scripts/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

// inject bower components to our html with the comment pattern syntax
gulp.task('wiredep', function () {
    return gulp.src(paths.index)
        .pipe(wiredep())
        .pipe(gulp.dest("."));
});


//copy our images
gulp.task('copy-images', function () {
    return gulp.src(['images/**/*.*'])
        .pipe(gulp.dest(paths.dist + '/images'));
});

//copy our assets and other minor files
gulp.task('copy-assets', function () {
    return gulp.src(['assets/**/*.*'])
        .pipe(gulp.dest(paths.dist + '/assets'));
});

//helps compile all js and css into one file (minified) specified in the comment syntax pattern
gulp.task('build-css-js-files', gulp.series('wiredep', function () {
    return gulp.src(paths.index)
        .pipe(useref())
        .pipe(gulpif('*.js', uglify(), jshint()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest(paths.dist));
}));

gulp.task('build-html', function () {
    return gulp.src('views/**/*.html')
        .pipe(minifyHtml({empty: true, minifyCSS: true, minifyJS: true, collapseWhitespace: true}))
        .pipe(gulp.dest(paths.dist + "/views"));
});

//clean our dist folder before building
gulp.task('clean', function () {
    return del(paths.dist);
});

//final build for production
gulp.task('build', gulp.series('clean', 'build-css-js-files', 'build-html', 'copy-images', 'copy-assets', function (done) {
    done();
}));

//watch for any form of changes in our app folder
gulp.task('watch-build', function () {
    gulp.watch(['./views/**/*.html'], gulp.parallel('build-html', function (done) {
        done();
    }));

    gulp.watch(['./images/**/*.*'], gulp.parallel('copy-images', function (done) {
        done();
    }));

    gulp.watch(['./index.html', './styles/**/*.css', './scripts/**/*.js'], gulp.parallel('build-css-js-files', function (done) {
        done();
    }));
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('testWatcher', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

//watch for any form of changes in our app folder
gulp.task('watch', function () {
    gulp.watch(['./views/**/*.html', './images/**/*.*', './index.html', './styles/**/*.css', './scripts/**/*.js'], function () {
        console.log("Reloading");
    });
});

gulp.task("default", gulp.parallel("wiredep"));
//serve our file for us
gulp.task("serve", gulp.parallel('testWatcher', 'webserver', 'wiredep', 'watch'));


//this is when you want to work on build directly
gulp.task("serve-build", gulp.parallel('webserver-build', 'build', 'watch-build'));