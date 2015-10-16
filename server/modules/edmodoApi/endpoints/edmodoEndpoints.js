'use strict';

module.exports = function(app){
  var edmodoService = require('../edmodoMiddleware.js');

  app.get('/api/edmodo/getAllAssignments', function(req, res){
    edmodoService.getAllAssignments(req, res)
      .then(function(response){
        res.send(response);
      })
      .catch(res.error)
      .done();
  });

  app.get('/api/edmodo/getAssignment/:assignmentId/:creatorId', function(req, res){
    edmodoService.getAssignment(req, res)
      .then(function(response){
        res.send(response);
      })
      .catch(res.error)
      .done();
  });
};