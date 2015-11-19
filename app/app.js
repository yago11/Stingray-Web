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
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: 'components/landing/landing.html',
        controller: 'landingController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
