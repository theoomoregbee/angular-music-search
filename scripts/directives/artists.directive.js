/**
 * Created by SQ04 on 3/16/2017.
 * Theophilus Omoregbee <theo4u@ymail.com>
 */

(function () {
    'use strict';
    angular.module("MusicSearch")
        .directive("artists", Artists);

    function Artists() {
        return {
            restrict: 'E',
            scope: {
                data: "=",
                currentPage: "="
            },
            templateUrl: "views/directives/artists.directive.html",
            controller: ArtistsController
        }
    }

    ArtistsController.$inject = ["$scope"];
    function ArtistsController($scope) {
        $scope.currentPage = $scope.data.offset + $scope.data.limit;
        console.log("artist directive", $scope.data);
    }

})();