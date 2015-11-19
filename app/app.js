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
        'ngMaterial',
        'ngMap'
    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {


        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    }]);
