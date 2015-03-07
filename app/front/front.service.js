(function () {
  "use strict";
  angular.module('frontin')
      .factory('FavoriteService', function () {
        var favorite = [];

        var addFavoriteCompany = function (newFavoriteCompany) {
          favorite.push(newFavoriteCompany);
        };
        var getFavoriteCompanies = function () {
          return favorite;
        };
        var removeFavoriteCompany = function (item) {
            var index = favorite.indexOf(item);
            favorite.splice(index,1);
        };

        return {
            addFavoriteCompany: addFavoriteCompany,
            getFavoriteCompanies: getFavoriteCompanies,
            removeFavoriteCompany: removeFavoriteCompany,
        };
    });
})();
