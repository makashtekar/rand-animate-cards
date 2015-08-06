cardsApp.controller('page1Controller',function($scope,$interval,countryService){

    $scope.title = 'Page 1';

    $scope.play = true;
    $scope.playButtonMessage = 'Stop countries moving';

    // Toggle playing animation
    $scope.togglePlay = function(){
      if( $scope.play ){// Running -> Stop
        $scope.play= false;
        $scope.playButtonMessage = 'Play countries moving';
      }else{ // Stop -> Running
        $scope.play= true;
        $scope.playButtonMessage = 'Stop countries moving';
      }
    }

    //Initialize OR load counntries
    $scope.loadCountries = function(){
      countryService.getAllCountries().then(function(countries){
          $scope.countries = countries;
          console.log(countries);
        },function(err){
          console.log('Some error occured');
          console.log(err);
        } );
    }


    $scope.loadCountries();    //Initial load
    $scope.$parent.changeTitle($scope.title);// Change title tag

    // Refresh country list at every 2 sec
    $interval(function(){
      $scope.loadCountries();
    },2000);


});
