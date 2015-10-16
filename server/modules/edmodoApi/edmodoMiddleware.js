'use strict';

var requestify = require('requestify'),
    Q = require('q'),
    logger = require('winston'),
    _ = require('underscore');

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
        logger.info('error', 'queryEdmodoAssignments failed: ' + error.body);
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
      req.assignmentCreatorId = req.params.creatorId;
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

  function getSingleAssignment(req){
    // this would be better if there was an api endpoint to get one assignment
    return Q.promise(function(resolve, reject){
      var assignmentURL = 'https://api.edmodo.com/assignments?access_token=12e7eaf1625004b7341b6d681fa3a7c1c 551b5300cf7f7f3a02010e99c84695d';
      requestify.get(assignmentURL).then(function(response){
        logger.info('info', 'getSingleAssignment successful');
        req.assignment = _filterAssignments(req.assignmentId, req.assignmentCreatorId, response.getBody());
        if(req.assignment){
          resolve(req);
        } else {
          logger.info('error', "could not find assignment with ID: " + req.assignmentId);
          reject({'error': "could not find assignment with ID: " + req.assignmentId});
        }
      }).catch(function(error){
        //todo : set logger config for error messages;
        logger.info('error', 'queryEdmodoAssignments failed: ' + error.body);
        reject(error);
      });
    });
  }

  function queryAssignmentSubmissions(req){
    return Q.promise(function(resolve, reject){
      var assignmentURL = 'https://api.edmodo.com/assignment_submissions';
      var accessToken = '12e7eaf1625004b7341b6d681fa3a7c1c 551b5300cf7f7f3a02010e99c84695d';

      var params = {
        assignment_id: req.assignmentId,
        assignment_creator_id: req.assignmentCreatorId,
        access_token: accessToken
      };

      requestify.get(assignmentURL, {params: params}).then(function(response){
        var assignmentObj = {
          'assignment' : req.assignment,
          'submissions' : response.getBody()
        };
        resolve(assignmentObj);
      }).catch(function(error){
        reject(error.body);
      });
    });
  }

  function _filterAssignments(assignmentId, creatorId, assignments){
    return _.find(assignments, function(assignment){
        return (assignment.id.toString() === assignmentId && assignment.creator.id.toString() === creatorId);
    });
  }
  return validateRequest(req).then(getSingleAssignment).then(queryAssignmentSubmissions);
};

module.exports = {
  getAllAssignments : getAllAssignments,
  getAssignment : getAssignment
};