(function () {
  "use strict";
  angular.module('frontin')
      .factory('FavoriteService', function () {
        var favorites = [];

        var addFavoriteCompany = function (newFavoriteCompany) {
          favorites.push(newFavoriteCompany);
        };
        var getFavoriteCompanies = function () {
          return favorites;
        };
        var removeFavoriteCompany = function (item) {
            var index = favorites.indexOf(item);
            favorites.splice(index,1);
        };
        return {
            addFavoriteCompany: addFavoriteCompany,
            getFavoriteCompanies: getFavoriteCompanies,
            removeFavoriteCompany: removeFavoriteCompany,
        };
    });
})();
