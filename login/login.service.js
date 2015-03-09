(function () {
  "use strict";
  angular.module('frontin')
    .factory('UserService', function() {

      var user = "";

      var setUsername = function(userName){
        user = userName;
        console.log(user);
      }
      var getUsername = function(){
        return user;
      }


      /////////////////////////////////
      //API
      /////////////////////////////////
      return {
        setUser: setUsername,
        getUser: getUsername
      }
      /////////////////////////////////
      /////////////////////////////////
    });
})();
