(function () {
  "use strict";

  angular.module('admin', [
  'ngRoute',
  'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/admincompanies', {
      templateUrl: '/admin/admin.companies.html',
      controller: 'AdminController as adminCtrl'
    })
    .when('/addcompany', {
      templateUrl: '/admin/admin.addcompany.html',
      controller: 'AdminController as adminCtrl'
    })
    .when('/edit/:companyId', {
      templateUrl: '/admin/admin.editcompany.html',
      controller: 'AdminController as adminCtrl'
    })

  });

})();
