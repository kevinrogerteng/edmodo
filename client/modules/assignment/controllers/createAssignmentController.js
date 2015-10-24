'use strict';

(function(angular){
  angular
    .module('AssignmentModule')
    .controller('CreateAssignmentController', CreateAssignmentController);

    CreateAssignmentController.$inject = ['$scope', 'AssignmentService', '$modalInstance'];

    function CreateAssignmentController($scope, AssignmentService, $modalInstance){
      $scope.ok = function () {
        $modalInstance.close();
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }

})(angular);