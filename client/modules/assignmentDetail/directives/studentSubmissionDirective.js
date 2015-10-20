'use strict';

(function(angular){

  angular
    .module('AssignmentDetailModule')
    .directive('studentSubmissions', studentSubmissionsDirective);

    function studentSubmissionsDirective(){

      return {
        restrict: 'EA',
        replace: false,
        scope: {
          submissions: '='
        },
        controller: StudentSubmissionController,
        templateUrl: 'modules/assignmentDetail/templates/student-submissions.html'
      };
    }

    StudentSubmissionController.$inject = ['$scope', '$state'];

    function StudentSubmissionController($scope, $state){
      $scope.$state = $state;
      console.log($scope.submissions);
    }




})(angular);