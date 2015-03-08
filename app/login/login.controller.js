//LOGIN Controller
(function(){

  "use strict";
  angular.module('frontin')
    .controller('LoginController', function (UserService, $location) {

    var loginCtrl = this;

    loginCtrl.goToStorefront = function(){
      $location.path('/store');
    };

    loginCtrl.login = function(username){
      username = username.toLowerCase()
      if(username === 'brent' || username === 'veronika' || username === 'allston' || username === 'courtland' || username ==='ronald'){
        UserService.setUser(username);
        $location.path('/admincompanies');
      };
    };

  });
})();
