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
<<<<<<< HEAD
        'ngAnimate'
    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
          .when('/',{
            templateUrl: 'components/landing/landing.html',
            controller: 'landingController',
            controllerAs: 'vm'
          })
          .when('/near',{
            templateUrl: 'components/near/near.html',
            controller: 'nearController',
            controllerAs: 'vm'
          })
          .when('/search',{
            templateUrl: 'components/near/near.html',
            controller: 'searchController',
            controllerAs: 'vm'
          })
          .when('/post',{
            templateUrl: 'components/near/near.html',
            controller: 'postController',
            controllerAs: 'vm'
          })
          .otherwise({
            redirectTo: '/'
          });
=======
        'ngAria',
        'ngAnimate',
        'ngMaterial',
        'ngMap'
    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

>>>>>>> 89fccb39cc342e82f3ffd1e12d3b2f5858910ecd

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    }]);
