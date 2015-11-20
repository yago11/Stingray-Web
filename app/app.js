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

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    }]);
