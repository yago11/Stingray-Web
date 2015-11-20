(function() {
  'use strict';

  angular
    .module('stingrayApp')
    .controller('searchController', searchController);

  searchController.$inject = ['$http'];

  function searchController($http) {
    var vm = this;

    vm.sting = '';
    vm.result = [];
    vm.long = 0;
    vm.lang = 0;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        vm.long = position.coords.longitude;
        vm.lang = position.coords.latitude;
      });
    }
    vm.searchSting = searchSting;
    vm.changeLocation = changeLocation;

    function getSting(keyword) {
      return $http({
        method: 'GET',
        url: 'https://api.backand.com/1/query/data/SearchSting',
        headers: {
          AnonymousToken: '23fd826e-e4d1-41a6-a91c-45e6ab6d213f'
        },
        params: {
          parameters: {
            keyword: "'" + keyword + "'"
          }
        }
      });
    }

    function searchSting(keyword) {
      getSting(keyword).then(function(results) {
        vm.results = results.data;
        console.log(vm.results);
        var i;
        for (i = 0; i < vm.results.length; i++) {
          $http({
            method: 'GET',
            headers: {
              'AnonymousToken': '23fd826e-e4d1-41a6-a91c-45e6ab6d213f'
            },
            url: 'https://api.backand.com:443/1/objects/Place/' + vm.results[i].Place
          }).then(function (response) {
            for (var j = 0; j < vm.results.length; j++) {
              if (response.data.id == vm.results[j].Place) {
                vm.results[j].Place = response.data;
              }
            }
          });
        }
      });
    }

    function changeLocation(lang, long) {
      vm.lang = lang;
      vm.long = long;
    }

  }
})();
