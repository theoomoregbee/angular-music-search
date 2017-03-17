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

    ArtistsController.$inject = ["$scope", "$uibModal"];
    /**
     * this is used to manage our directive
     * @param $scope
     * @param $uibModal
     * @constructor
     */
    function ArtistsController($scope, $uibModal) {
        $scope.currentPage = $scope.data.offset + $scope.data.items.length;
        console.log("artist directive", $scope.data);
        $scope.openAlbums = openAlbums;

        /**
         * this is used to open our modal oo
         * @param artist
         */
        function openAlbums(artist) {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'artist.album.html',
                controller: ArtistAlbumController,
                controllerAs: 'artistAlbumCtrl',
                size: "lg",
                backdrop: false,
                resolve: {
                    artist: artist
                }
            });

        }

    }

    ArtistAlbumController.$inject = ["artist", "$uibModalInstance", "Spotify"];
    /**
     * this is used to handle our modal popout
     * @param artist
     * @param $uibModalInstance
     * @param Spotify
     * @constructor
     */
    function ArtistAlbumController(artist, $uibModalInstance, Spotify) {
        var vm = this;
        vm.artist = artist;
        vm.loading = false;
        vm.cancel = cancel;
        vm.albums = {};

        /**
         * this is used to load/fetch albums
         */
        function fetch() {

            vm.loading = true;
            Spotify.getAlbums(vm.artist.id).then(function (success) {
                vm.loading = false;
                console.log(success);
                vm.albums = success.data;
            }, function (failure) {
                console.error(failure);
                vm.loading = false;
            });
        }


        /**
         * when cancel is clicked on our modal
         */
        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }


        /**
         * call this methods at controller load
         */
        fetch();

    }


})();