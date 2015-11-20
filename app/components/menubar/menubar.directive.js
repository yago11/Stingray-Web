angular
    .module('stingrayApp')
    .directive('srMenubar', srMenubar);

srMenubar.$inject = ['$location'];
function srMenubar($location) {
    var menubar = {
        restrict: 'E',
        templateUrl: 'components/menubar/menubar.template.html',
        controller: srMenubarController,
            controllerAs: 'srMenubarCtrl',
        link: function(scope, element, attrs) {
            element.find('a[href="' + $location.path() + '"]').addClass("active");
            element.find('a').on('click', function(e) {
                element.find(".active").removeClass("active");
                $(this).parent().addClass("active");
            });
        }
    }
    return menubar;

}

angular
    .module('stingrayApp')
    .directive('srMenubarController', srMenubarController);

srMenubarController.$inject = [];
function srMenubarController() {
    var srMenubarCtrl = this;

    srMenubarCtrl.logedIn = false;
}
