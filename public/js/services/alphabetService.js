cardsApp.service('alphabetService',['$http', function($http){

  this.getAllAlphabets =  function(){

     var request = $http.get('/alphabets/getAll');

     return(request.then(
          function(res){ // Success callback
            return res.data;
          },
          function(err){ // Failure callback
            return err;
          }
        ));
    //return { letters : ['A','B','C','D'] };
  }

}] );
