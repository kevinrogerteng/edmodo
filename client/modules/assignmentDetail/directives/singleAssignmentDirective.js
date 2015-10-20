'use strict';

(function(angular){

  angular
    .module('AssignmentDetailModule')
    .directive('singleAssignmentDetail', SingleAssignmentDetailDirective);

    function SingleAssignmentDetailDirective(){

      return {
        restrict: 'EA',
        replace: false,
        scope: {
          assignment: '='
        },
        controller: SingleAssignmentDetailController,
        templateUrl: 'modules/assignmentDetail/templates/single-assignment-details.html'
      };
    }

    SingleAssignmentDetailController.$inject = ['$scope', '$state'];

    function SingleAssignmentDetailController($scope, $state){
      $scope.$state = $state;
      console.log($scope.assignment);
    }




})(angular);