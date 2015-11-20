(function () {
  'use strict';

  angular
    .module('stingrayAppp')
    .controller('stingComposerController', stingComposerController);

  stingComposerController.$inject = [];

  /* @ngInject */
  function stingComposerController() {
    var vm = this;
    vm.title = 'stingComposerController';
    vm.geocodeAddress = geocodeAddress;
    vm.geocode = new google.maps.Geocoder();
    vm.composeSting = composeSting;

    activate();

    ////////////////

    function activate() {

    }

    function composeSting(sting){

      var user = {
        id: 1,
        name: 'sapir',
        facebook_user_id: 1,
        user_type: 'soldier'
      };
      geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var a = results[0].geometry.location;
          $http({
            method: 'POST',
            url: 'https://api.backand.com:443/1/objects/Sting',
            headers: {
              'AnonymousToken': '23fd826e-e4d1-41a6-a91c-45e6ab6d213f'
            },
            data: {
              User: user,
              Place: {
                User: user,
                id: 11,
                name: 'palaspel',
                description: 'palapel',
                langtitude: a[0],
                longtitude: a[1]
              },
              price: sting.price,
              description: sting.description
            }
          });
        } else {
        }
      });
    }

    function geocodeAddress(geocoder, address) {

    }
  }

})();


