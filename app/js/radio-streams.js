angular.module('radioStreams', [])

.constant('radioStreamsDir', 'radio-streams')

.controller('RadioStreamsCtrl', ['$scope', '$http', '$sce', 'playerService', 'radioStreamsDir',
  function($scope, $http, $sce, playerService, radioStreamsDir) {
    $scope.streams = [];
    $http.get(radioStreamsDir + '/streams.json').then(
      function successCallback(resp) {
        console.log(resp);
        angular.forEach(resp.data, function(stream) {
          stream.audio = $sce.trustAsResourceUrl(stream.audio);
          $scope.streams.push(stream);
        });
      }, function errorCallback(resp) {
        console.log(resp);
      }
    );

    $scope.playStream = function(stream) {
      $scope.activeStream = stream
      var src = {
        audio: stream.audio,
        image: radioStreamsDir + '/images/' + stream.image,
        name: stream.name,
      };
      playerService.setSrc(src);
    };

    $scope.$on('PLAYER_SRC_CHANGED', function(response) {
      $scope.src = playerService.getSrc();
    })
  }
])
;
