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
    vm.selectedSting = {};
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
        url: 'https://api.backand.com:443/1/objects/Sting'
      }).then(function(response){
        vm.markers = response.data.data;
        var i;
        for(i = 0; i < vm.markers.length; i++){
          $http({
            method: 'GET',
            headers: {
              'AnonymousToken': '23fd826e-e4d1-41a6-a91c-45e6ab6d213f'
            },
            url: 'https://api.backand.com:443/1/objects/Place/' + vm.markers[i].Place
          }).then(function(response){
            for(var j = 0; j < vm.markers.length; j++){
              if(response.data.id == vm.markers[j].Place){
                vm.markers[j].Place = response.data;
              }
            }
          });

        }
      });
    }

    function showDetails(evt){
      vm.selectedSting = this.marker;
      for(var i = 0; i < vm.markers.length; i++){
        if(vm.selectedSting.Place == vm.markers[i].Place.id) {
          vm.selectedSting.Place = vm.markers[i].Place;
        }
      }
    }
  }

})();

