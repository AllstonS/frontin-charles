(function () {
  "use strict";
  angular.module('frontin')
      .factory('FavoriteService', function () {

        var favorites = [];

        var getFavorites = function () {
          console.log('getting favorites');
          return favorites;
        };

        var addFavorite = function (newFavorite) {
          favorites.push(newFavorite);
          console.log(favorites);
        };

        var removeFavorite = function (company) {
            var index = favorites.indexOf(company);
            favorites.splice(index,1);
        };
        return {
            addFavoriteCompany: addFavorite,
            getFavoriteCompanies: getFavorites,
            removeFavoriteCompany: removeFavorite,
        };
    });
})();
