/* Services */

angular.module('localServices', ['ngResource'])

.factory('LocalTrack', ['$resource',
  function($resource){
    // this is only used to get a list of tracks from tracks.json
    return $resource('local-tracks/:trackId.json', {}, {
      query: {method:'GET', params:{trackId:'tracks'}, isArray:true}
    });
  }]);
