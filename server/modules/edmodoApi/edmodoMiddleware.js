'use strict';

var requestify = require('requestify'),
    Q = require('q'),
    logger = require('winston');

var getAllAssignments = function(req, res){
  //todo have a request validation (user still logged in?)
  function queryEdmodoAssignments(){
    return Q.promise(function(resolve, reject){
      var assignmentURL = 'https://api.edmodo.com/assignments?access_token=12e7eaf1625004b7341b6d681fa3a7c1c 551b5300cf7f7f3a02010e99c84695d';
      requestify.get(assignmentURL).then(function(response){
        logger.info('info', 'queryEdmodoAssignments successful');
        resolve(response.getBody());
      }).catch(function(error){
        //todo : set logger config for error messages;
        logger.info('info', 'queryEdmodoAssignments failed: ' + error.body);
        reject(error);
      });
    });
  }
  return queryEdmodoAssignments();
};

var getAssignment = function(req, res){

  function validateRequest(req){
    return Q.promise(function(resolve, reject){
      req.assignmentId = req.params.assignmentId;
      req.assignmentCreatorId = req.params.assignmentCreatorId;
      // req.assignmentId = 24800159;
      // req.assignmentCreatorId = 73240721;
      if(req.assignmentId && req.assignmentCreatorId){
        logger.info('info', 'acquiring assignment with assignmentId: ' + req.assignmentId + ' and assignmentCreatorId: ' + req.assignmentCreatorId);
        resolve(req);
      } else {
        logger.info('info', 'an ID is missing assignmentId: ' + req.assignmentId + ' and assignmentCreatorId: ' + req.assignmentCreatorId);
        reject();
      }
    });
  }

  function querySingleEdmodoAssignment(req){
    return Q.promise(function(resolve, reject){
      var assignmentURL = 'https://api.edmodo.com/assignment_submissions';
      var accessToken = '12e7eaf1625004b7341b6d681fa3a7c1c 551b5300cf7f7f3a02010e99c84695d';

      var params = {
        assignment_id: req.assignmentId,
        assignment_creator_id: req.assignmentCreatorId,
        access_token: accessToken
      };

      requestify.get(assignmentURL, {params: params}).then(function(response){
        resolve(response.getBody());
      }).catch(function(error){
        reject(error);
      });
    });
  }

  return validateRequest(req).then(querySingleEdmodoAssignment);
};

module.exports = {
  getAllAssignments : getAllAssignments,
  getAssignment : getAssignment
};