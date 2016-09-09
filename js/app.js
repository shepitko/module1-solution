(function(){
  'use strict';

  angular.module('myApp', [])
  .controller('LunchController',  LunchController);

  LunchController.$inject = ['$scope'];

  function LunchController($scope){
    $scope.checkLunch = function(products){
      if(products == ""){
        $scope.msgs = "Please enter data first";
      }else{
        var prod_size = products.split(',')
                                 .map(function(e){return e.trim()})
                                 .length;
        if(prod_size <= 3 ){
          $scope.msgs = "Enjoy!";
        }else{
          $scope.msgs = "Too much!!";
        }
      }
    }
  }

})();