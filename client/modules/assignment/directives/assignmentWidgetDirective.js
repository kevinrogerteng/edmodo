'use strict';

(function(angular){

  angular
    .module('AssignmentModule')
    .directive('edAssignmentWidget', EdAssignmentWidgetDirective);

    function EdAssignmentWidgetDirective(){

      function _link(scope, iElement){

      }

      return {
        restrict: 'EA',
        replace: false,
        scope: {
          assignments: '='
        },
        controller: EdAssignmentWidgetController,
        templateUrl: 'modules/assignment/templates/assignment-widget.html',
        link: _link
      };
    }

    EdAssignmentWidgetController.$inject = ['$scope', '$state'];

    function EdAssignmentWidgetController($scope, $state){
      $scope.$state = $state;
    }




})(angular);