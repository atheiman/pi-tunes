angular.module('pandora', ['player'])

.controller('PandoraCtrl', ['$scope', 'audioService',
  function($scope, audioService) {
    $scope.callSetSrc = function(str) {
      audioService.setSrc(str);
    }
  }
])
;
