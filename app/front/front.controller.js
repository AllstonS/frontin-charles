(function () {
    "use strict";
    angular.module('demoApp')
    .controller('MainController', function (ComapnyService, $routeParams, $location, _, $rootScope) {
        var mainCtrl = this;

        CompanyService.getSingleCompany($routeParams.productId).success(function (data) {
            mainCtrl.singleCompany=data;
        });
        CompanyService.getCompanies().success(function (data) {
            mainCtrl.companies = data;
        });
        mainCtrl.currentIndex = $routeParams.compnyId;
    })
})();
