cardsApp.controller('page2Controller',function($scope, $interval, alphabetService){

  $scope.title = 'Page 2';

    $scope.play = true;
    $scope.playButtonMessage = 'Stop alphabets moving';

    // Toggle playing animation
    $scope.togglePlay = function(){
      if( $scope.play ){// Running -> Stop
        $scope.play= false;
        $scope.playButtonMessage = 'Play alphabets moving';
      }else{ // Stop -> Running
        $scope.play= true;
        $scope.playButtonMessage = 'Stop alphabets moving';
      }
    }

    //Initialize OR load alphabets
    $scope.loadAlphabets = function(){
      alphabetService.getAllAlphabets().then(function(alphabets){
          $scope.alphabets = alphabets;
        },function(err){
        console.log('Some error occured');
        console.log(err);
        });
    }


    $scope.loadAlphabets();  //Initial load
    $scope.$parent.changeTitle($scope.title);  // Change title tag

    // Refresh alphabet list at every 2 sec
    $interval(function(){
      $scope.loadAlphabets();
    },2000);

});
