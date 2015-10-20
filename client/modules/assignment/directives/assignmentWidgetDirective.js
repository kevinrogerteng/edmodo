'use strict';

(function(angular){

  angular
    .module('AssignmentModule')
    .directive('edAssignmentWidget', EdAssignmentWidgetDirective);

    function EdAssignmentWidgetDirective(){

      return {
        restrict: 'EA',
        replace: false,
        scope: {
          assignments: '='
        },
        controller: EdAssignmentWidgetController,
        templateUrl: 'modules/assignment/templates/assignments-widget.html'
      };
    }

    EdAssignmentWidgetController.$inject = ['$scope', '$state'];

    function EdAssignmentWidgetController($scope, $state){
      $scope.$state = $state;
    }




})(angular);