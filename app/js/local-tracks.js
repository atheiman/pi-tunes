angular.module('localTracks', ['ngResource'])

.constant('localTracksDir', 'local-tracks')

.factory('LocalTrack', ['$resource', 'localTracksDir',
  function($resource, localTracksDir){
    // this is only used to get a list of tracks from tracks.json
    return $resource(localTracksDir + '/:trackId.json', {}, {
      query: {method:'GET', params:{trackId:'tracks'}, isArray:true}
    });
  }
])

.controller('LocalTracksCtrl', ['$scope', 'localTracksDir', 'LocalTrack', 'playerService',
  function($scope, localTracksDir, LocalTrack, playerService) {
    $scope.tracks = LocalTrack.query();

    $scope.playTrack = function(track) {
      $scope.activeTrack = track
      var src = {
        audio: localTracksDir + '/music/' + track.audioFile,
        image: localTracksDir + '/album-art/' + track.albumArtFile,
        name: track.title,
        artist: track.artist,
        album: track.album,
      };
      playerService.setSrc(src);
    };

    $scope.$on('PLAYER_SRC_CHANGED', function(response) {
      $scope.src = playerService.getSrc();
    })
  }
])
;
