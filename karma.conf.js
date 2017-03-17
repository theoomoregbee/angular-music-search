// Karma configuration
// Generated on Tue Jan 03 2017 20:36:42 GMT+0100 (WAT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [


            './bower_components/jquery/dist/jquery.js',                             // angular
            './bower_components/angular/angular.js',                             // angular
            './node_modules/angular-mocks/angular-mocks.js',
            './bower_components/angular-animate/angular-animate.js',
            './bower_components/ngstorage/ngStorage.js',
            './bower_components/angular-loading-bar/build/loading-bar.js',
            './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',

            //views
            './views/**/*.html',

            //modules
            './scripts/app.module.js',

            //tests
            './tests/**/*.js'
        ],


        // list of files to exclude
        exclude: [
            // './bower_components/**/!(angular|angular-ui-router|).js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './views/**/*.html': ["ng-html2js"]
        },

        ngHtml2JsPreprocessor: {
            // the name of the Angular module to create
            moduleName: "app.templates"
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};
