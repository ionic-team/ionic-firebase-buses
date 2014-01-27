angular.module('starter.const', [])

.constant('CITIES', [
  {
    lat: 37.7789,
    lng: -122.3917,
    title: 'SF MUNI',
    firebaseUrl: "https://publicdata-transit.firebaseio.com/sf-muni"
  }
])
.constant('DEFAULT_START_CITY', {
  lat: 37.7789,
  lng: -122.3917,
  title: 'SF MUNI',
  firebaseUrl: "https://publicdata-transit.firebaseio.com/sf-muni"
})