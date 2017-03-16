(function () {
    'use strict';

    angular.module("MusicSearch")
        .controller("MainController", MainController);

    MainController.$inject = ["$scope", "Spotify", "Constants", "$timeout"];

    function MainController($scope, Spotify, Constants, $timeout) {
        var vm = this;
        console.log("am here");
        vm.selected_filter = ["artist", "album"];
        vm.search_types = Spotify.searchTypes;
        vm.updateSelectedTypes = updateSelectedTypes;
        vm.search = search;
        vm.searching = false;


        /**
         * this method helps to organize and manage our selected types to filter with
         * @param check
         * @param type
         */
        function updateSelectedTypes(check, type) {
            console.log(check, vm.selected_filter.indexOf(type));
            if (check) {
                vm.selected_filter.push(type);
            } else
                vm.selected_filter.splice(vm.selected_filter.indexOf(type), 1);
        }

        /**
         * this is used to perform search to our spotiy
         * where it handles debounce of query entered as the user is searching for auto search type head
         *
         * @see processSearch
         *
         * @param query
         */
        function searchAuto(query) {
            vm.timer;//holds our timer for us

            $timeout.cancel(vm.timer);//cancel previous search

            /**
             * debounce implementation
             */
            vm.timer = $timeout(function () {
                vm.timer = undefined;


            }, Constants.DEFAULT_DEBOUNCE_TIME);
        }


        /**
         * this performs search
         *
         * @see processSearch
         *
         * @param query
         */
        function search(query) {
            vm.searching = true;
            Spotify.search(vm.selected_filter, query).then(function (success) {
                console.log(success);
                vm.searching = false;
            }, function (failure) {
                console.error(failure);
                vm.searching = false;
            });
        }


        /**
         * this is the main search which handles the to and fro communication with our spotify service
         * and it is used by the normal search and type head search
         * @param query
         * @param filter
         * @param limit
         * @param offset
         * @param success_cb
         * @param failure_cb
         */
        function processSearch(query, filter, limit, offset, success_cb, failure_cb) {
            return Spotify.search(filter, query, offset, limit).then(success_cb, failure_cb);
        }


    }

})();