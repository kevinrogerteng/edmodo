'use strict';

(function(angular){
  angular
    .module('AssignmentModule')
    .controller('AssignmentController', AssignmentController);

    AssignmentController.$inject = ['$scope', 'Assignments', 'AssignmentService'];

    function AssignmentController($scope, Assignments, AssignmentService){
      $scope.assignments = Assignments;
    }
})(angular);