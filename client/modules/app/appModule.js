'use strict';

// this is the main angular module, any new modules or dependencies must be onjected into this module

(function(angular){

  angular.module('Edmodo', [
    'ui.router',
    'AssignmentModule',
    'AssignmentDetailModule',
    'angularMoment',
    'mm.foundation',
    'LoaderModule'
  ]).run(function(amMoment){
    amMoment.changeLocale('en');
  });

})(angular);