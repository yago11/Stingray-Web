(function () {
  'use strict';

  angular
    .module('stingrayApp')
    .directive('srMap', srMap);

  srMap.$inject = [];

  /* @ngInject */
  function srMap() {
    return {
      restrict: 'E',
      templateUrl: 'components/srMap/srMap.html',
      scope: {},
      controller: 'srMapController',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();



