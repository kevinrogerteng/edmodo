'use strict';

(function(angular){
  angular
    .module('AssignmentDetailModule')
    .factory('AssignmentDetailService', AssignmentDetailService);

    AssignmentDetailService.$inject = ['$q', '$http'];

    function AssignmentDetailService($q, $http){

      var assignmentDetailUrl = {
        singleAssignmentUrl : 'api/edmodo/getAssignment'
      };

      return {
        assignment: {},

        getAssignment: function(stateParams){

          var deferred = $q.defer();
          var url = assignmentDetailUrl.singleAssignmentUrl + '/' +stateParams.assignmentId + '/' + stateParams.creatorId;
          $http.get(url).then(function(response){
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