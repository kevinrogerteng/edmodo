'use strict';

(function(angular){
  angular
    .module('AssignmentModule')
    .controller('AssignmentsController', AssignmentsController);

    AssignmentsController.$inject = ['$scope', 'Assignments', 'AssignmentService'];

    function AssignmentsController($scope, Assignments, AssignmentService){
      $scope.assignments = Assignments;
    }
})(angular);