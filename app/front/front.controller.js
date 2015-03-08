(function () {
    "use strict";
    angular.module('frontin')
    .controller('CompanyController', function (CompanyService, FavoriteService, $routeParams, $location, $scope) {

        var compCtrl = this;

        var favorites = FavoriteService.getFavoriteCompanies();

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
        compCtrl.addToFavorites = function(company){
          console.log('trying to add company');
          console.log(company);
          FavoriteService.addFavoriteCompany(company);
        };
        compCtrl.removeFromFavorites = function(company){
          console.log('trying to delete company');
          FavoriteService.removeFavoriteCompany(company);
        };
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
        Favorite.total = 0;

        favorite.addFavoriteCompany = function (item) {
            FavoriteService.addFavoriteCompany(item);
        };
        favorite.removeFavoriteCompany = function (item) {
            FavoriteService.removeFavoriteCompany(item);
        };
        favorite.updateTotal = function () {
            favorite.total = FavoriteService.getTotalNumberOfFavoriteCompanies();
            return favorite.total;
        };
    })
})();
