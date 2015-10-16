'use strict';

(function(angular){
  angular
    .module('Edmodo')
    .config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RouterConfig($stateProvider, $urlRouterProvider){

      // any other unknown routes, user will be redirected to the home page
      $urlRouterProvider.otherwise('/assignments');

      $stateProvider.state('assignments.details', {
        url: '/:assignmentId/creator/:creatorId',
        controller: 'AssignmentDetailController',
        templateUrl: 'modules/assignmentDetail/templates/assignmentDetails.html',
        resolve : {
          Assignment : function(AssignmentDetailService, $stateParams){
            return AssignmentDetailService.getAssignment($stateParams);
          }
        }
      });

      $stateProvider.state('assignments', {
        url: '/assignments',
        controller: 'AssignmentsController',
        templateUrl: 'modules/assignment/templates/assignments.html',
        resolve: {
          Assignments: function(AssignmentService){
            return AssignmentService.getAssignments();
          }
        }
      });
    }
})(angular);
