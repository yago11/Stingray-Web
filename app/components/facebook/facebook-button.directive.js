angular
    .module('stingrayApp')
    .directive('facebookButton', facebookButton);

function facebookButton() {
    var button = {
        restrict: 'E',
        templateUrl: 'components/facebook/facebook.template.html',
        replace: true
    }
    return button;

}
