(function() {
  "use srtict";

  angular.module('frontin')
  .controller('MainController', function ($location) {
    var mainCtrl = this;

    mainCtrl.goToAdmin = function (){
      $location.path('/admin');
    };
    mainCtrl.goToList = function (){
      $location.path('/list');
    };
    mainCtrl.goToMap = function (){
      $location.path('/map');
    };
  });
})();
