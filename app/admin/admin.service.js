(function () {
  "use strict";
  angular.module('frontin')
    .factory('CompanyService', function($http, $location) {  //check: $routeParams

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/frontin';

      var getCompanies = function () {
        return $http.get(url);
      };

      var getSingleCompany = function () {
        return $http.get(url + '/' + id);
      };

      var addCompany = function (company) {
        $http.post(url, company).success(function(){
          $location.path('/admincompanies');
        });
      };

      var deleteCompany = function (id) {
        $http.delete(url + '/' + id)
      };

      var editCompany = function (company, id) {
        $http.put(url + '/' + id, company).success(function(){
          $location.path('/admincompanies');
        });
      };
      return {
        getCompanies: getCompanies,
        getSingleCompany: getSingleCompany,
        addCompany: addCompany,
        deleteCompany: deleteCompany,
        editCompany: editCompany
      };

    });
})();
