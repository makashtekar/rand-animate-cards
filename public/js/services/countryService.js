cardsApp.service('countryService',['$http', function($http){

  this.getAllCountries =  function(){

     var request = $http.get('/country/getAll');

     return(request.then(
          function(res){ // Success callback
            return res.data;
          },
          function(err){ // Failure callback
            return err;
          }
        ));
    //return { 'IN' : 'INDIA' , 'UK' : 'United Kingdom' , 'USA' : 'United state of America' };
  }

}] );
