angular.module('player', [])

.factory('playerService', function($rootScope) {
  // Used to share data between source controller and player controller
  var src = {
    audio: '',            // audio (str) - URL of audio
    image: '',            // image (str) - URL of image
    name: '',             // name (str) - track name or equivalent
    artist: '',           // artist (str) - artist name or equivalent
    album: '',            // album (str) - album name or equivalent
    votingEnabled: false, // voting (boolean) - should voting be enabled
    votedUp: false,       // votedUp (boolean) - src has been voted down
    votedDown: false,     // votedDown (boolean) - src has been voted up
  };

  var obj = {};
  obj.setSrc = function(obj) {
    src = obj
    $rootScope.$broadcast('PLAYER_SRC_CHANGED');
  };
  obj.getSrc = function() {return src;};
  obj.changeVoteStatus = function(str) {    // 'up', 'down', or 'clear'
    switch (str) {
      case 'up':
        src.votedUp = true;
        src.votedDown = false;
        break;
      case 'down':
        src.votedUp = false;
        src.votedDown = true;
        break;
      case 'clear':
        src.votedUp = false;
        src.votedDown = false;
        break;
    }
    $rootScope.$broadcast('PLAYER_VOTE_CHANGED');
  }

  return obj;
})

.controller('PlayerCtrl', ['$scope', '$interval', 'playerService',
  function($scope, $interval, playerService) {
    $scope.src = {};
    $scope.$on('PLAYER_SRC_CHANGED', function(response) {
      $scope.src = playerService.getSrc();
    })

    $scope.vote = function(str) {
      playerService.changeVoteStatus(str);
    };

    var playPauseBtn = document.getElementById('playPauseBtn');
    $scope.playOrPause = function() {
      var audio = document.getElementsByTagName('audio')[0];
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    };
    $interval(function() {
      // Update the play pause button on an interval. Angular updates ng-class
      // before the audio element starts playing the media, so ng-class sets
      // the button to glyphicon-play and then the media plays without updating
      // the button to glyphicon-pause
      var audio = document.getElementsByTagName('audio')[0];
      if (typeof audio === 'undefined')
        return;
      if (audio.paused) {
        playPauseBtn.classList.add('glyphicon-play');
        playPauseBtn.classList.remove('glyphicon-pause');
      } else {
        playPauseBtn.classList.remove('glyphicon-play');
        playPauseBtn.classList.add('glyphicon-pause');
      }
    }, 200);

    $scope.skip = function() {
      return;
      // set activeTrack to next song in tracks
      // var index = $scope.tracks.indexOf($scope.activeTrack);
      // if (index + 1 == $scope.tracks.length)  // if last song active, skip to first
      //   $scope.activeTrack = $scope.tracks[0]
      // else
      //   $scope.activeTrack = $scope.tracks[index + 1];
    }
    // document.getElementsByTagName('audio')[0].addEventListener('ended', $scope.skip);
  }
])

.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });

      attrs.$observe('ngSrc', function(value) {
        if (!value && attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
})
;
