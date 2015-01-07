(function(){
  var app = angular.module('trip', [ ]);

  app.controller('TripController', function TripController($scope){
    var store = this;
    store = [ ];
    var locations =["SFO", "Pucon", "Villarrica", "Santiago", "VinaDelMar"]
    var instagramApi = function(location) {
      return 'https://api.instagram.com/v1/tags/' + location + '/media/recent?access_token=ACCESS-TOKEN'
    };
    for (var i=0, i < locations.length, i++){
      $http.get(instagramApi(locations[i]);).success(function(data){

      });
    };
  });
})();