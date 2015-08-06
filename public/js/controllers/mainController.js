cardsApp.controller('mainController',function($scope){
  $scope.title = 'Animated card app';

  //Change title facility
  $scope.changeTitle = function( title ){
    $scope.title = title;
  }

});
