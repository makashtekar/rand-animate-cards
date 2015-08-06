cardsApp.directive('moveMe',function(){
  return function( $scope,$element,$attrs ){
        $scope.$watch($attrs.moveMe,function(newVal){
            if( newVal == true ){ // Move me is turned on
              // Keep moving
              $element.addClass('animated shake infinite');
            }else{ // Move me is turned off
              //Stop Moving
              $element.removeClass('animated shake infinite');
            }
        });
  }
});
