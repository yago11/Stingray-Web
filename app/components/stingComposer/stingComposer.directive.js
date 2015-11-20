(function () {
  'use strict';

  angular
    .module('stingrayApp')
    .directive('stingComposer', stingComposer);

  stingComposer.$inject = [];

  /* @ngInject */
  function stingComposer() {
    return {
      restrict: 'E',
      templateUrl: 'components/stingComposer/stingComposer.html',
      scope: {},
      controller: 'stingComposerController',
      controllerAs: 'vm',
      bindToController: true
    };
  }
})();

