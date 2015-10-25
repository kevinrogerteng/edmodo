'use strict';

(function(angular){
  angular
    .module('AssignmentModule')
    .controller('CreateAssignmentController', CreateAssignmentController);

    CreateAssignmentController.$inject = ['$scope', 'AssignmentService', '$modalInstance'];

    function CreateAssignmentController($scope, AssignmentService, $modalInstance){
      $scope.newAssignment = {};

      $scope.beforeRender = function($dates){
        var now = parseInt(moment().unix() + "000");

        angular.forEach($dates, function(date, index){

          if(date.utcDateValue < now){
            $dates[index].selectable = false;
          }
          // 2016-06-09T00:22:32.000Z
          if(date.utcDateValue === now){
            $dates[index].active = true;
            $scope.newAssignment.due_at = $dates.utcDateValue;
          }

        })
      };

      $scope.ok = function () {
        $scope.newAssignment.due_at = moment.utc($scope.newAssignment.dueDate).format()
        $modalInstance.close($scope.newAssignment);
        console.log($scope.newAssignment);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }

})(angular);