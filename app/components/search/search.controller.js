(function() {
  'use strict';

  angular
    .module('stingrayApp')
    .controller('searchController', searchController);

  searchController.$inject = ['$http'];

  function searchController($http) {
    var vm = this;

    vm.place = '';
    vm.result = [];
    vm.searchPlace = searchPlace;

    function getPlace(keyword) {
      return $http({
        method: 'GET',
        url: 'https://api.backand.com/1/query/data/SearchPlace',
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

    function searchPlace(keyword) {
      getPlace(keyword).then(function(results) {
          console.log(results);
        vm.results = results.data;
      });
    }

  }
})();
