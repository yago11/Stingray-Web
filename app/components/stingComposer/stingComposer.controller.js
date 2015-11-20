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
      vm.geocoder.geocode({'address': sting.address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var location = results[0].geometry.location;
          $http ({
            method: 'GET',
            url: 'https://api.backand.com/1/query/data/FindPlace',
            headers: {
              AnonymousToken: '23fd826e-e4d1-41a6-a91c-45e6ab6d213f'
            },
            params: {
              parameters: {
                name: '"'+sting.name+'"',
                lan: location[0],
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
        } else {
        }
      });
    }

    function checkIfExists(address, name){

    }
  }

})();


