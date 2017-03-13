(function (){
    'use strict';
    
    angular.module("MusicSearch") 
    .config(["cfpLoadingBarProvider", "$stateProvider", "$urlRouterProvider", "$locationProvider", "$httpProvider", function (cfpLoadingBarProvider, $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {



        // $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
      
      /*
        //arrange all the routing here
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: '../views/login/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        })
            .state('forgot', {
                url: '/forgot',
                templateUrl: '../views/forgot/forgot.html'
            })
            .state('error', {
                url: '/error',
                templateUrl: '../views/404.html'
            })
            .state('verification', {
                url: '/verification/:verification',
                templateUrl: '../views/mail_verification/verification.html',
                controller: 'VerificationController',
                controllerAs: 'verificationCtrl'
            });
*/

    }]);
    
    
})();