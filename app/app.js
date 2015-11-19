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
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: 'app/components/landing/landing.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });