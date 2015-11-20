(function () {
  'use strict';

  angular
    .module('stingrayApp')
    .controller('landingController', landingController);

  landingController.$inject = [];
  function landingController() {
    var vm = this;

    vm.blocks = [];

    vm.blocks.push({
        image: 'images/Coin.png',
        article: 'Stingray is an app created for us soldiers, who are suffering from low salary and go through a rough patch having so little cash to spend. \
        Stingray allows you to to find \'stings\' around you, great opportunities to aqcuire something for a special price introduced to soldiers only \
        (maybe even for free). So stop waisting your cash and start "stinging" your way through the modern economy.'
    });
    vm.blocks.push({
        image: 'images/Stingray.png',
        article: 'Wether you use a pc, a mac, a mobile phone or any other device, you can visit Stingray and search for great stings for you to explore \
        and use to maximize your salary. Let\'s say your really want a burger right now and apperently there is a great place just around the corner, \
        you never knew about which offers a 20% percent discount to soldiers. Take out your phone and let Stingray find it for you and save you couple of shekels. \
        You\'re welcome!'
    });
    vm.blocks.push({
        image: 'images/Stingray.png',
        article: 'In case you are a bussiness owner, who supports soldiers or just a good samaritan and you are interested to promote your business for this \
        purpose, contact us and we\'ll help you in your cause. Any activity of this sort is very welcome :)'
    });
    vm.blocks.push({
        image: 'images/Stingray.png',
        article: 'The Stingray team is very proud to present you with this product. We hope it will you help you "sting" something! \
        Feel free to contcat us with any matter.'
    });

  }

})();
