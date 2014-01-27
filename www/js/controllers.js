angular.module('starter.controllers', ['starter.const', 'firebase'])


// A simple controller that fetches a list of data from a service
.controller('CityCtrl', function($scope, $firebase, DEFAULT_START_CITY) {
  var cityRef = new Firebase(DEFAULT_START_CITY.firebaseUrl);
  // Automatically syncs everywhere in realtime
  $scope.city = $firebase(cityRef);

  $scope.currentCity = DEFAULT_START_CITY;
});