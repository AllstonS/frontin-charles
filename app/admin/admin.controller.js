(function () {
  "use strict";
  angular.module('frontin')
    .controller('AdminController', function (CompanyService, $scope, $location, $routeParams){

      var adminCtrl = this;

      CompanyService.getCompanies().success(function(data){
        adminCtrl.companies = data;
      });

      CompanyService.getSingleCompany($routeParams.companyId).success(function(data){
        adminCtrl.singleCompany = data;
      });

//add new company
    adminCtrl.addCompany = function (newCompany) {
      CompanyService.addCompany(newCompany);
    };

//delete company
    adminCtrl.deleteCompany = function (id) {
      CompanyService.deleteCompany(id);
    };

//edit company
    adminCtrl.editCompany = function (id) {
      CompanyService.editCompany (company, company._id); //or $routeParams.companyId?
    };
//Routing?? see Brent's work
  });

})();
