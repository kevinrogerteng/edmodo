'use strict';

(function(angular){

  angular
    .module('AssignmentDetailModule')
    .directive('studentSubmissions', studentSubmissionsDirective);

    function studentSubmissionsDirective(){

      function _link(scope, el){
        // console.log(el.find('accordion-group'));
      }

      return {
        restrict: 'EA',
        replace: false,
        scope: {
          submissions: '='
        },
        controller: StudentSubmissionController,
        templateUrl: 'modules/assignmentDetail/templates/student-submissions.html',
        link: _link
      };
    }

    StudentSubmissionController.$inject = ['$scope', '$state'];

    function StudentSubmissionController($scope, $state){
      $scope.$state = $state;
      $scope.oneAtATime = true;
      // console.log($scope.submissions);
    }




})(angular);