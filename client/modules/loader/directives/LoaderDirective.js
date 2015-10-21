'use strict';

(function(angular){
  angular
    .module('LoaderModule')
    .directive('edLoader', LoaderDirective);

    function LoaderDirective(){
      return {
        restrict: 'EA',
        replace: true,
        controller: 'LoaderController',
        templateUrl: 'modules/loader/templates/loader.html'
      };
    }
})(angular);