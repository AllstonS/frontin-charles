(function () {
    "use strict";
    angular.module('frontin')
    .controller('CompanyController', function (CompanyService, FavoriteService, $routeParams, $location, $rootScope) {
        var compCtrl = this;

        CompanyService.getSingleCompany($routeParams.companyId).success(function (data) {
            compCtrl.singleCompany = data;
            console.log(data);
        });
        CompanyService.getCompanies().success(function (data) {
            compCtrl.companies = data;
        });
        compCtrl.currentIndex = $routeParams.companyId;
    })
})();
