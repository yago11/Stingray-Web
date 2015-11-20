(function() {
  'use strict';

  angular
    .module('stingrayApp')
    .controller('postController', postController);

  postController.$inject = [];

  function postController() {
    var vm = this;

    vm.long = 0;
    vm.lang = 0;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        vm.long = position.coords.longitude;
        vm.lang = position.coords.latitude;
      });
    }
  }
})();
