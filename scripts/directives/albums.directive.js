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

    AlbumsController.$inject = ["$scope", "Spotify"];
    function AlbumsController($scope, Spotify) {
        $scope.currentPage = $scope.data.offset + $scope.data.items.length;
        console.log("album directive", $scope.data);

        $scope.paginator = {
            total: $scope.data.total,
            maxSize: 9,
            currentPage: 1,
            pageChanged: pageChanged
        };
        $scope.fetching = false; //used to hold when the pagination is process


        /**
         * this is used to trigger our reload function when the page changes
         */
        function pageChanged() {
            console.log('Page changed to: ' + $scope.paginator.currentPage);

            /**
             * incase the user changes the page as we are fetching it should de reference the scope binding with the
             * view
             * @type {*}
             */
            var page = angular.copy($scope.paginator.currentPage);

            $scope.fetching = true;
            var offset = $scope.data.limit * page; //calculate pagination
            var search_query = $scope.data.search;

            Spotify.search(["album"], search_query, offset, $scope.data.limit).then(function (success) {
                $scope.fetching = false;
                console.log(success);

                $scope.data = success.data.albums;
                $scope.data.search = search_query;

                //update our paginate directive
                $scope.paginator.currentPage = page;

                //update our outer count of how many result fetched of total
                $scope.currentPage = success.data.albums.offset;

            }, function (failure) {
                console.error(failure);
                $scope.fetching = false;
            });

        }
    }

})();