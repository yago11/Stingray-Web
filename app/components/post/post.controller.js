(function() {
  'use strict';

  angular
    .module('stingrayApp')
    .controller('postController', postController);

  postController.$inject = ['$http'];

  function postController($http) {
    var vm = this;

    vm.long = 0;
    vm.lang = 0;
    vm.uploadFile = uploadFile;
    vm.composeSting = composeSting;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        vm.long = position.coords.longitude;
        vm.lang = position.coords.latitude;
      });
    }


    function uploadFile(filename, filedata){
      return $http({
        method: 'POST',
        url: 'https://api.backand.com/1/objects/action/Images/?name=S3FileUpload',
        headers: {
          'Content-Type': 'application/json',
          'AnonymousToken': '23fd826e-e4d1-41a6-a91c-45e6ab6d213f'
        },
        data:
        {
          "filename":filename,
          "filedata": filedata.substr(filedata.indexOf(',')+1, filedata.length)
        }
      });
    }


    function composeSting(sting){
      var location = [];
      //var formData = new FormData();
      //var fileEle = document.getElementById('fileUpload');
      //formData.append('fileData', fileEle.files[0]);
      //uploadFile(fileEle.files[0].name, formData);
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

  }
})();
