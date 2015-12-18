/* App Module */

angular.module('piTunes', [
  'ngRoute',

  'localControllers',
  'localServices',
  'localDirectives',
])

.config(['$routeProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/local-tracks', {
        templateUrl: 'partials/local-tracks.html',
        controller: 'LocalTrackCtrl'
      }).
      when('/radio-streams', {
        templateUrl: 'partials/radio-streams.html',
        controller: 'LocalTrackCtrl'
      }).
      when('/pandora', {
        templateUrl: 'partials/pandora.html',
        controller: 'LocalTrackCtrl'
      }).
      when('/google-play-music', {
        templateUrl: 'partials/google-play-music.html',
        controller: 'LocalTrackCtrl'
      }).
      otherwise({
        redirectTo: '/local-tracks'
      });
  }
])

.controller('SourceCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.sources = [
    {path: '/local-tracks', label: 'Local Tracks'},
    {path: '/radio-streams', label: 'Radio Streams'},
    {path: '/pandora', label: 'Pandora'},
    {path: '/google-play-music', label: 'Google Play Music'}
  ];
  $scope.locationPath = function (newLocation) {
    return $location.path(newLocation);
  };
}])
;
