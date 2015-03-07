(function () {
  "use strict";

  angular.module('frontmain', [
    'ngRoute',
    'ngAnimate'
  ])
  .config(function($routeProvider){
    $routeProvider
    .when('/companylist', {
      templateUrl: '/front/front.companies.html',
      controller: 'CompanyController as compCtrl'
    })

  });

})();
