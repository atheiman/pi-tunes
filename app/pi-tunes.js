/* App Module */

var piTunes = angular.module('piTunes', [
  'ngRoute',

  // 'localControllers',
]);

piTunes.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'sources/partials/source-list.html'
      }).
      // when('/local', {
      //   templateUrl: 'local/track-list.html',
      //   controller: 'LocalTrackListCtrl'
      // }).
      // when('/local/:trackId', {
      //   templateUrl: 'local/track.html',
      //   controller: 'LocalTrackCtrl'
      // }).
      otherwise({
        redirectTo: '/'
      });
  }]);
