'use strict';

(function(angular){
  angular
    .module('AssignmentModule')
    .controller('AssignmentsController', AssignmentsController);

    AssignmentsController.$inject = ['$scope', '$state', 'Assignments', 'AssignmentService', '$modal', '$log'];

    function AssignmentsController($scope,$state, Assignments, AssignmentService, $modal, $log){
      $scope.assignments = Assignments;
      $scope.$state = $state;

      $scope.createAssignment = function($event){
        $event.preventDefault();
        var modalInstance = $modal.open({
          templateUrl: 'createAssignment.html',
          controller: 'CreateAssignmentController'
        });

        modalInstance.result.then(function (assignment) {
          $scope.assignments.push(assignment);
        });
      };
    }
    
})(angular);