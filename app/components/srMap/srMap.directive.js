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
      replace: true,
      scope: {
        searchQuery: '=',
        lang: '=',
        long: '='
      },
      controller: 'srMapController',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
