(function () {
  "use strict";
  angular.module('frontin')
    .factory('CompanyService', function($http, $location) {  //check: $routeParams

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/frontin';

      var getCompanies = function () {
        return $http.get(url);
      };

      var getSingleCompany = function (id) {
        return $http.get(url + '/' + id);
      };

      var addCompany = function (company) {
        $http.post(url, company).success(function(){
          $location.path('/admincompanies');
        });
      };

      var deleteCompany = function (id) {
        $http.delete(url + '/' + id).success(function(){
          $location.path('/admincompanies')
        });

      };

      var getCoords = function (company) {
        var replacedStreet = company.address1.split(' ').join('+');
        var replacedCity = company.city.split(' ').join('+');
        var address = replacedStreet + ',+' + replacedCity + ',+SC';
        var apiKey = '&key=AIzaSyDO1iZdri67JXkir3pRcn8NrPcA0sIOuDk'
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + apiKey;

        console.log(address);
        $http.get(url).success(function(dataset){
          console.log(dataset);
          var compGeo = dataset.results[0].geometry.location
          company.coords = {};
          company.coords.longitude = compGeo.lng;

          company.coords.latitude = compGeo.lat;
          editCompany(company, company._id);
        });
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
        editCompany: editCompany,
        getCoords: getCoords
      };

    });
})();
