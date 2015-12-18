/* Controllers */

angular.module('localControllers', [])

.constant('localTracksDir', 'local-tracks')

.controller('LocalTrackCtrl', ['$scope', '$interval', 'LocalTrack', 'localTracksDir',
  function($scope, $interval, LocalTrack) {
    // $scope.tracks = LocalTrack.query();
    // $scope.setActiveTrack = function(track) {
    //   $scope.activeTrack = track;
    // };

    // $scope.voteUp = function(track) {
    //   if (track.votedUp === true) {
    //     track.votedUp = false;
    //   } else {
    //     track.votedUp = true;
    //     track.votedDown = false;
    //   }
    // };
    // $scope.voteDown = function(track) {
    //   if (track.votedDown === true) {
    //     track.votedDown = false;
    //   } else {
    //     track.votedDown = true;
    //     track.votedUp = false;
    //   }
    // };

    // var playPauseBtn = document.getElementById('playPauseBtn');
    // $scope.playOrPause = function() {
    //   var audio = document.getElementsByTagName('audio')[0];
    //   if (audio.paused) {
    //     audio.play();
    //   } else {
    //     audio.pause();
    //   }
    // };
    // $interval(function() {
    //   // Update the play pause button on an interval. Angular updates ng-class
    //   // before the audio element starts playing the media, so ng-class sets
    //   // the button to glyphicon-play and then the media plays without updating
    //   // the button to glyphicon-pause
    //   var audio = document.getElementsByTagName('audio')[0];
    //   if (typeof audio === 'undefined')
    //     return;
    //   if (audio.paused) {
    //     playPauseBtn.classList.add('glyphicon-play');
    //     playPauseBtn.classList.remove('glyphicon-pause');
    //   } else {
    //     playPauseBtn.classList.remove('glyphicon-play');
    //     playPauseBtn.classList.add('glyphicon-pause');
    //   }
    // }, 200);

    // $scope.skip = function() {
    //   // set activeTrack to next song in tracks
    //   var index = $scope.tracks.indexOf($scope.activeTrack);
    //   if (index + 1 == $scope.tracks.length)  // if last song active, skip to first
    //     $scope.activeTrack = $scope.tracks[0]
    //   else
    //     $scope.activeTrack = $scope.tracks[index + 1];
    // }

    // document.getElementsByTagName('audio')[0].addEventListener('ended', $scope.skip);
  }
])
;
