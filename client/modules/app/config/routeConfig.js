'use strict';

(function(angular){
  angular
    .module('Edmodo')
    .config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RouterConfig($stateProvider, $urlRouterProvider){

      // any other unknown routes, user will be redirected to the home page
      $urlRouterProvider.otherwise('/assignments');

      $stateProvider.state('selectedAssignment', {
        url: '/assignments/:assignmentId'
      });

      $stateProvider.state('allAssignments', {
        url: '/assignments',
        controller: 'AssignmentController',
        templateUrl: 'modules/assignment/templates/assignments.html',
        resolve: {
          Assignments: function(AssignmentService){
            return AssignmentService.getAssignments();
          }
        }
      });
    }
})(angular);
