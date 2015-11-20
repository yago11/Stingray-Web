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

    function composeSting(sting){
      var location = [];
      navigator.geolocation.getCurrentPosition(function(position){
        location[0] = position.coords.latitude;
        location[1] = position.coords.longitude;

        $http ({
          method: 'GET',
          url: 'https://api.backand.com/1/query/data/InsertPlace',
          headers: {
            'AnonymousToken': '23fd826e-e4d1-41a6-a91c-45e6ab6d213f'
          },
          params: {
            parameters: {
              lat: location[0],
              name: '"'+sting.name+'"',
              lon: location[1]
            }
          }
        }).then(function (response) {
          $http({
            method: 'GET',
            url: 'https://api.backand.com/1/query/data/InsertSting',
            headers: {
              AnonymousToken: '23fd826e-e4d1-41a6-a91c-45e6ab6d213f'
            },
            params: {
              parameters: {
                description: '"'+sting.description+'"',
                price: '"'+sting.price+'"',
                placeName: '"'+sting.name+'"',
                userId: '1'
              }
            }
          });
        });
      });

    }

    function checkIfExists(address, name){

    }
  }

})();


