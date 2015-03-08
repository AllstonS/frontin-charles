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
    var getTotalNumberOfFavoriteCompanies = function () {
        if(!favorite.length) return 0;
        return _.pluck(favorite, 'price').reduce(function (memo,num) {
            return memo + num;
        });
    };
    return {
        getFavoriteCompanies: getFavoriteCompanies,
        addFavoriteCompany: addFavoriteCompany,
        getTotalNumberOfFavoriteCompanies: getTotalNumberOfFavoriteCompanies,
        removeFavoriteCompany: removeFavoriteCompany,
    };
});
})();
