'use strict';

(function(angular){

  angular
    .module('LoaderModule')
    .service('LoaderService', LoaderService);

    LoaderService.$inject = ['$q', '$rootScope'];

    function LoaderService($q, $rootScope){
      var loading = false;
      var pendingRequestCount = 0;

      var loader = {
        isloading: function(){
          return loading;
        },
        _start: function(){
          loading = true;
          $rootScope.$broadcast('loader:start');
        },
        _stop: function(){
          loading = false;
          $rootScope.$broadcast('loader:stop');
        },
        _incrementPendingRequestCount: function(){
          pendingRequestCount++;
        },
        _decrementPendingRequestCount: function(){
          if(pendingRequestCount > 0){
            pendingRequestCount--;
          }
        },
        _resetPendingRequestCount: function(){
          pendingRequestCount = 0;
        },
        pushRequest: function(){
          loader._incrementPendingRequestCount();
          loader._start();
        },
        popRequest: function(){
          loader._decrementPendingRequestCount();
          if(pendingRequestCount === 0){
            loader._stop();
          }
        }
      };

      return {
        loader: loader,
        request: function(config){
          loader.pushRequest();
          return config;
        },
        response: function(response){
          loader.popRequest();
          return response;
        },
        responseError: function(rejection){
          loader.popRequest();
          return $q.reject(rejection);
        }
      };
    }

})(angular);