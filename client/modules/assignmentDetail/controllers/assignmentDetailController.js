'use strict';

(function(angular){
  angular
    .module('AssignmentDetailModule')
    .controller('AssignmentDetailController', AssignmentDetailController);

    AssignmentDetailController.$inject = ['$scope', 'Assignment', 'AssignmentDetailService'];

    function AssignmentDetailController($scope, Assignment, AssignmentDetailService){
      var assignment = Assignment.assignment;
      var submissions = Assignment.submissions;

      $scope.tabs = [
          {
            tabName: 'Assignment',
            content: assignment,
            defaultView: true
          },
          {
            tabName: 'Submissions',
            content: submissions,
            defaultView: false
          }
      ];
    }
})(angular);