'use strict';

(function(angular){
  angular
    .module('AssignmentModule')
    .controller('AssignmentsController', AssignmentsController);

    AssignmentsController.$inject = ['$scope', '$state', 'Assignments', 'AssignmentService'];

    function AssignmentsController($scope,$state, Assignments, AssignmentService){
      $scope.assignments = Assignments;
      $scope.$state = $state;
    }
    
})(angular);