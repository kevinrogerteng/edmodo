'use strict';

(function(angular){
  angular
    .module('AssignmentModule')
    .factory('AssignmentService', AssignmentService);

    AssignmentService.$inject = ['$q', '$http'];

    function AssignmentService($q, $http){

      var url = {
        allAssignmentsUrl : 'api/edmodo/getAllAssignments',
        singleAssignmentUrl : 'api/edmodo/getAssignment'
      };

      return {
        assignments: [],

        getAssignments: function(){
          var deferred = $q.defer();

          $http.get(url.allAssignmentsUrl).then(function(response){
            deferred.resolve(response.data);
          }, function(err){
            //do something with error
            deferred.reject(err);
          });

          return deferred.promise;
        }
      };
    }
})(angular);