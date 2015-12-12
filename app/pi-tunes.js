/* App Module */

angular.module('piTunes', [
  'ngRoute',

  'localControllers',
  'localServices',
  'localDirectives',
])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'sources/partials/source-list.html'
      }).
      when('/local', {
        templateUrl: 'local/partials/track-list.html',
        controller: 'LocalTrackCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
