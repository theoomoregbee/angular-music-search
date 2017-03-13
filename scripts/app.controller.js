(function (){
    'use strict';
    
    angular.module("MusicSearch")
    .controller("MainController", MainController);
    
    MainController.$inject= ["$scope"];
    
    function MainController ($scope){
        var vm = this;
        console.log("am here");
    }
    
    })();