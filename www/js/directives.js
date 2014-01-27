angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="map"></div>',
    scope: {
      city: '='
    },
    link: function($scope, $element, $attr) {

      var map = new google.maps.Map($element[0], {
        center: new google.maps.LatLng($scope.city.lat, $scope.city.lng),
        zoom: 17
      })

    }
  }
})