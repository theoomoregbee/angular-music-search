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
        vm.getSuggestion = getSuggestion;


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
         * this is used with our typehead to help get the query in album since it encompasses artist tracks etc
         *
         * @param query
         * @return {*}
         */
        function getSuggestion(query) {

            if (!query)
                return;


            return Spotify.search(["album"], query, 0, Constants.DEFAULT_TYPEHEAD_ITEM)
                .then(function (response) {
                    return response.data.albums.items.map(function (item) {
                        return {name: item.name, image: item.images[2]};
                    });
                });
        }

        /**
         * this performs search
         *
         * @see processSearch
         *
         * @param query
         */
        function search(query) {
            if (!query || query === "")
                return;

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