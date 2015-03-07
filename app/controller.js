(function() {
  "use srtict";

  angular.module('frontin')
  .controller('MainController', function ($location) {
    var mainCtrl = this;

    mainCtrl.goToAdmin = function (){
      $location.path('/admin');
    };
    mainCtrl.goToCompList = function (){
      $location.path('/companylist');
    };
  });
})();
