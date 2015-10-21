'use strict';

(function(angular){
  angular
  .module('LoaderModule')
  .controller('LoaderController', LoaderController);

  LoaderController.$inject = ['$scope', '$rootScope', '$timeout'];

  function LoaderController($scope, $rootScope, $timeout){
    var startLoader = true;

    $scope.loading = true;

    $rootScope.$on('loader:start', function(){
      startLoader = true;
      $timeout(function(){
        if(startLoader){
          $scope.loading = true;
        }
      }, 100);
    });

    $rootScope.$on('loader:stop', function(){
      startLoader = false;
      $timeout(function(){
        if(!startLoader){
          $scope.loading = false;
        }
      }, 50);
    });
  }

})(angular);