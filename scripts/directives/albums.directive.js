/**
 * Created by SQ04 on 3/16/2017.
 * Theophilus Omoregbee <theo4u@ymail.com>
 */

(function () {
    'use strict';
    angular.module("MusicSearch")
        .directive("albums", Albums);

    function Albums() {
        return {
            restrict: 'E',
            scope: {
                data: "="
            },
            templateUrl: "views/directives/albums.directive.html",
            controller: AlbumsController
        }
    }

    AlbumsController.$inject = ["$scope"];
    function AlbumsController($scope) {
        console.log($scope.data);
    }

})();