(function () {
  "use strict";

  angular.module('frontmain', [
    'ngRoute',
    'ngAnimate'
  ])
  .config(function($routeProvider){
    $routeProvider
    .when('/list', {
      templateUrl: 'front/front.companies.html',
      controller: 'CompanyController as compCtrl'
    })
    .when('/map', {
      templateUrl: 'front/front.map.html',
      controller: 'CompanyController as compCtrl'
    })
    .when('/favorites', {
      templateUrl: 'front/front.favorites.html',
      controller: 'CompanyController as compCtrl'
    })
    .when('/details/:companyId', {
      templateUrl: 'front/front.companydetail.html',
      controller: 'CompanyController as compCtrl'
    })
  });

})();
