(function () {
  'use strict';

  angular
    .module('stingrayApp')
    .controller('srMapController', srMapController);

  srMapController.$inject = ['$http', 'NgMap'];

  /* @ngInject */
  function srMapController($http, NgMap) {
    var vm = this;
    vm.title = 'srMapController';
    vm.markers = {
        position: []
      };
    vm.getMarketsPositions = getMarketsPositions;
    vm.showDetails = showDetails;
    vm.selectedMarker = {};
    vm.radius = 1000;

    activate();

    ////////////////

    function activate() {
      getMarketsPositions();


    }

    function getMarketsPositions() {
      $http({
        method: 'GET',
        headers: {
          'AnonymousToken': '23fd826e-e4d1-41a6-a91c-45e6ab6d213f'
        },
        url: 'https://api.backand.com:443/1/objects/Place'
      }).then(function(response){
        vm.markers = response.data.data;
        vm.selectedMarker = vm.markers[0];
      });
    }

    function showDetails(evt){
      vm.selectedMarker = this.marker;
    }
  }

})();

