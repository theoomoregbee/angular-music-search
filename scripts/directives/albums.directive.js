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
                data: "=",
                currentPage: "="
            },
            templateUrl: "views/directives/albums.directive.html",
            controller: AlbumsController
        }
    }

    AlbumsController.$inject = ["$scope"];
    function AlbumsController($scope) {
        $scope.currentPage = $scope.data.offset + $scope.data.items.length;
        console.log("album directive", $scope.data);
    }

})();