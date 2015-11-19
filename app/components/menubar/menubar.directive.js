angular
    .module('stingrayApp')
    .directive('srMenubar', srMenubar);

function srMenubar() {
    var menubar = {
        restrict: 'E',
        templateUrl: 'components/menubar/menubar.template.html',
        link: function(scope, element, attrs) {
            element.find('a').on('click', function(e) {
                element.find(".active").removeClass("active");
                $(this).parent().addClass("active");
            });
        }
    }
    return menubar;

}
