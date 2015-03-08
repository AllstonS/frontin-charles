(function () {
    "use strict";
    angular.module('frontin')
    .controller('CompanyController', function (CompanyService, FavoriteService, $routeParams, $location, $scope) {

        var compCtrl = this;

        var favorites = FavoriteService.getFavoriteCompanies();
        console.log(favorites);

        $scope.map = {
          center: {
            latitude: 32.8433,
            longitude: -79.9333
          },
          zoom: 12
        };

        CompanyService.getSingleCompany($routeParams.companyId).success(function (data) {
            compCtrl.singleCompany = data;

        });
        CompanyService.getCompanies().success(function (data) {
            compCtrl.companies = data;
            // for( var i = 0; i < data.length ; i++) {
            //   CompanyService.getCoords(data[i]);
            //   console.log('looping ' + i);
            // }
        });
        compCtrl.currentIndex = $routeParams.companyId;
    })
})();
