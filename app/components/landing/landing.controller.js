(function () {
  'use strict';

  angular
    .module('stingrayApp')
    .controller('landingController', landingController);

  landingController.$inject = [];
  function landingController() {
    var vm = this;
    vm.title = 'landingController';
  }

})();
