(function () {
    'use strict';

    angular.module("MusicSearch")
        .controller("MainController", MainController);

    MainController.$inject = ["$scope", "Spotify"];

    function MainController($scope, Spotify) {
        var vm = this;
        console.log("am here");
        vm.selected_filter = [];
        vm.search_types = Spotify.searchTypes;
        vm.updateSelectedTypes = updateSelectedTypes;


        /**
         * this method helps to organize and manage our selected types to filter with
         * and it also checks if the item was there before and the check is true , may because
         * of popover destroy state
         * @param check
         * @param type
         */
        function updateSelectedTypes(check, type) {
            console.log(check, vm.selected_filter.indexOf(type));
            if (check) {
                if (vm.selected_filter.indexOf(type) == -1)
                    vm.selected_filter.push(type);
            } else
                vm.selected_filter.splice(vm.selected_filter.indexOf(type), 1);
        }


    }

})();