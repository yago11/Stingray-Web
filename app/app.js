'use strict';

/**
 * @ngdoc overview
 * @name stingrayApp
 * @description
 * # stingrayApp
 *
 * Main module of the application.
 */
angular
    .module('stingrayApp', [
        'ngResource',
        'ngRoute',
        'ngAria',
        'ngAnimate',
        'ngMaterial'
    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
          .when('/',{
            templateUrl: 'components/landing/landing.html',
            controller: 'landingController'
          })
          .otherwise({
            redirectTo: '/'
          });

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    }]);
