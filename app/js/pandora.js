angular.module('pandora', ['player'])

.controller('PandoraCtrl', ['$scope', 'playerService',
  function($scope, playerService) {
    $scope.callSetSrc = function(str) {
      playerService.setSrc(str);
    }
  }
])
;
