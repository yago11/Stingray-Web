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
        'ngMap',
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
            templateUrl: 'components/search/search.html',
            controller: 'searchController',
            controllerAs: 'vm'
          })
          .when('/post',{
            templateUrl: 'components/post/post.html',
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
