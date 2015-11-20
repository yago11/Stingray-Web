(function () {
  'use strict';

  angular
    .module('stingrayApp')
    .controller('stingComposerController', stingComposerController);

  stingComposerController.$inject = ['$http'];

  /* @ngInject */
  function stingComposerController($http) {
    var vm = this;
    vm.title = 'stingComposerController';
    vm.composeSting = composeSting;
    vm.checkIfExists = checkIfExists;
    vm.geocoder = new google.maps.Geocoder();

    activate();

    ////////////////

    function activate() {

    }

    function checkIfExists(address, name){

    }
  }

})();


