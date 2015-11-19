(function () {
  'use strict';

  angular
    .module('stingrayApp')
    .controller('landingController', landingController);

  landingController.$inject = [];
  function landingController() {
    var vm = this;

    vm.blocks = [];

    for (var i = 0; i < 4; i++) {
        vm.blocks.push({
            image: 'images/Stingray.png',
            article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        });
    }

  }

})();
