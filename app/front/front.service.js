(function () {
  "use strict";
  angular.module('frontin')

    .factory('FavoriteService', function (_) {
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
            getFavoriteCompanies: getFavoriteCompanies,
            addFavoriteCompany: addFavoriteCompany,
            removeFavoriteCompany: removeFavoriteCompany,
        };
    })
})();
