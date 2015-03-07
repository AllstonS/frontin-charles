(function () {
  "use strict";

  angular.module('login', [
    'ngRoute',
    'ngAnimate'
  ])
  .config(function($routeProvider){
    $routeProvider
      .when('/admin', {
        templateUrl: 'login/login.html',
        controller:'LoginController as loginCtrl'
      })
  });
})();
