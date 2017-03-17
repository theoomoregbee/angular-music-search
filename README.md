# angular-music-search
this is a music search using spotify and angular , the main build application is in dist/
[Spotify Api Endpoint](https://developer.spotify.com/web-api/search-item/)

## Features
* Type Head
* Artist and Album Search (using directives)
* Using service to handle interaction with spotify
* On Artist clicked display albums 
* coming soon tracks and playlist (no time, remaining directive design)
* paginated directive views




## installation Guide

* install node
* `npm install bower -g`
* `npm install -g karma-cli`
* `npm install` in this root `app` folder
* `npm install git+https://git@github.com/gulpjs/gulp.git#4.0 -g` in this root `app` folder
* `bower install` in this root `app` folder
* `gulp serve` this will run and automatically run our browser
* `gulp build` to build the distributive version
* `gulp serve-build` to run the build version of everything
* `gulp test` to run the test
* `gulp testWatcher` to run the test that we be watching for any changes
* `node web.js` to run the app as a node application

## Testing
* `karma start` to run test
* all our tests are located in the `tests/` folder which most follow the `scripts/` pattern for each files there

## connecting with webstorm or phpstorm
* goto > Run > Edit configuration
* click on `+` then select `Gulp` from the list
* then add the name to any name you wish e.g `appRun`
* then select the gulp file, which is our gulpfile.json
* then add task as `serve`
* then save or apply
* now you can now click on the run tool bar or run command
* enjoy ur code
