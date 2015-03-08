(function () {
    "use strict";
    angular.module('frontin')
    .controller('CompanyController', function (CompanyService, FavoriteService, $routeParams, $location, $scope) {

        var compCtrl = this;

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

        compCtrl.goToCompanies = function() {
          $location.path('/list');
          $('head').find('style').remove();
        }
        compCtrl.changeBackground = function(company){
          console.log('changing bg image');
          var image = company.logo;
          console.log(image);
          $('head').find('style').remove();
          $('<style>body:before{background-image: url("'+image+'");}</style>').appendTo('head');
        }
    })


    .controller('FavoriteController', function (FavoriteService) {

        var favorite = this;

        favorite.items = FavoriteService.getFavoriteCompanies();
        favorite.total = 0;

        favorite.addFavoriteCompany = function (item) {
            FavoriteService.addFavoriteCompany(item);
        };
        favorite.removeFavoriteCompany = function (item) {
            FavoriteService.removeFavoriteCompany(item);
        };

    })
})();
