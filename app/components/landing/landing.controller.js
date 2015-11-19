(function () {
  'use strict';

  angular
    .module('stingrayApp')
    .controller('landingController', landingController);

  landingController.$inject = [''];

  /* @ngInject */
  function landingController() {
    var vm = this;
    vm.title = 'landingController';

    activate();

    ////////////////ss

    function activate() {

    }
  }

})();


