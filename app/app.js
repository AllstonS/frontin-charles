(function () {
  "use strict";
  angular.module('frontin', [
  'ngRoute',
  'ngAnimate',
  'uiGmapgoogle-maps',
  'admin',
  'login',
  'frontmain'
  ])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/splash.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/splash', {
      templateUrl: 'views/splash.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/not-found', {
      templateUrl: 'views/404.html',
      controller: 'MainController as mainCtrl'
    })
    .otherwise({
      redirectTo: '/not-found'
    })
  });

})();
