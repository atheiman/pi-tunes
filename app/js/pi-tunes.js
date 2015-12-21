angular.module('piTunes', [
  'ngRoute',

  'player',
  'localTracks',
  'radioStreams',
  'pandora',
  'googlePlayMusic',
])

.config(['$routeProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/local-tracks', {
        templateUrl: 'partials/local-tracks.html',
        controller: 'LocalTracksCtrl'
      }).
      when('/radio-streams', {
        templateUrl: 'partials/radio-streams.html',
        controller: 'RadioStreamsCtrl'
      }).
      when('/pandora', {
        templateUrl: 'partials/pandora.html',
        controller: 'PandoraCtrl'
      }).
      when('/google-play-music', {
        templateUrl: 'partials/google-play-music.html',
        controller: 'GooglePlayMusicCtrl'
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
