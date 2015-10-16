'use strict';

(function(angular){
  angular
    .module('AssignmentDetailModule')
    .controller('AssignmentDetailController', AssignmentDetailController);

    AssignmentDetailController.$inject = ['$scope', 'Assignment', 'AssignmentDetailService'];

    function AssignmentDetailController($scope, Assignment, AssignmentDetailService){
      $scope.assignment = Assignment;
      $scope.submissions = $scope.assignment.submissions;
    }
})(angular);