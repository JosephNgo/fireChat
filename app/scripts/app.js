var app = angular.module("FireChat", ["firebase"]);

app.controller("ChatController", ["$scope", function($scope, Room) {
  // now we can use $firebase to synchronize data between clients and the server!
  $scope.rooms = "Room.all";
}]);

app.factory("Room", ["$firebase", function($firebase) {
  var firebaseRef = new Firebase("https://flickering-fire-1601.firebaseio.com/");
  var rooms = $firebase(firebaseRef.child("rooms")).$asArray();

  return {
    all:rooms
  }
}])

