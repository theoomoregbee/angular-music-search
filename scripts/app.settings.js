(function () {
    'use strict';

    angular.module("MusicSearch")
        .config(["cfpLoadingBarProvider", function (cfpLoadingBarProvider) {
        }])
        .constant('Constants', {
            DEFAULT_DEBOUNCE_TIME: 800,
            DEFAULT_TYPEHEAD_ITEM: 6
        });


})();