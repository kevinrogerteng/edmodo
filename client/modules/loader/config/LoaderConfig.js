'use strict';

(function(angular){

  angular
    .module('LoaderModule')
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('LoaderService');
      });
})(angular);